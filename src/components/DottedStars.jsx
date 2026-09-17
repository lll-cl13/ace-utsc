import { useEffect, useRef } from 'react';
import './DottedStars.css';

const TAU = Math.PI * 2;

function createStarTemplate(arms = 5, pointsPerArm = 9, inner = 0.22, outer = 1.0) {
  const pts = [];
  for (let a = 0; a < arms; a++) {
    const baseAng = (a / arms) * TAU - Math.PI / 2;
    for (let i = 0; i < pointsPerArm; i++) {
      const t = i / (pointsPerArm - 1);
      const r = inner + (outer - inner) * Math.pow(t, 0.85);
      const ang = baseAng + (Math.random() - 0.5) * 0.022;
      const jitter = (Math.random() - 0.5) * 0.01;
      pts.push({
        ox: Math.cos(ang) * r + jitter,
        oy: Math.sin(ang) * r + jitter,
        size: 1.35 - t * 0.85,
      });
    }
  }
  // center
  pts.push({ ox: 0, oy: 0, size: 1.9 });
  return pts;
}

function createStars(count, w, h, biasRight = false) {
  const stars = [];
  const templates = [
    createStarTemplate(5, 9),
    createStarTemplate(4, 8, 0.2, 1.08),
    createStarTemplate(6, 7, 0.25, 0.92),
  ];
  for (let i = 0; i < count; i++) {
    const rightBias = biasRight ? 0.55 + Math.random() * 0.42 : Math.random();
    stars.push({
      cx: w * (0.48 + rightBias * 0.48),
      cy: h * (0.12 + Math.random() * 0.55),
      rot: Math.random() * TAU,
      vx: (Math.random() - 0.5) * 7,
      vy: (Math.random() - 0.5) * 7,
      vr: (Math.random() - 0.5) * 0.22,
      template: templates[i % templates.length],
      scale: 1.35 + Math.random() * 0.9,
      phase: Math.random() * 100,
      colorMix: i === 0 ? 0 : (Math.random() < 0.3 ? 1 : 0),
    });
  }
  return stars;
}

function createFieldDots(count, w, h) {
  const dots = [];
  for (let i = 0; i < count; i++) {
    dots.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 22,
      vy: (Math.random() - 0.5) * 22,
      size: 0.5 + Math.random() * 0.7,
      seed: Math.random() * 1000,
      alpha: 0.55 + Math.random() * 0.35,
    });
  }
  return dots;
}

function drawHalftone(ctx, w, h, color) {
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.58;

  const spacing = 9.5;
  const maxRadius = 2.6;

  // Left vertical halftone (strong on left, fades right)
  for (let y = 0; y < h + spacing; y += spacing) {
    for (let x = 0; x < w * 0.38; x += spacing) {
      const t = x / (w * 0.38);
      const fade = Math.pow(1 - t, 1.35);
      const r = maxRadius * fade * (0.7 + Math.sin(y * 0.07) * 0.3);
      if (r > 0.35) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, TAU);
        ctx.fill();
      }
    }
  }

  // Bottom-right halftone circle-ish fade
  const cx = w * 0.78;
  const cy = h * 0.78;
  const maxDist = Math.min(w, h) * 0.55;

  for (let y = h * 0.42; y < h + spacing * 0.6; y += spacing) {
    for (let x = w * 0.48; x < w + spacing * 0.6; x += spacing) {
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > maxDist) continue;
      const fade = Math.pow(1 - dist / maxDist, 1.5);
      const r = maxRadius * fade * 0.95;
      if (r > 0.3) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, TAU);
        ctx.fill();
      }
    }
  }

  ctx.globalAlpha = 1;
}

export default function DottedStars({
  backgroundColor = '#ffffff',
  dotColor = '#0f172a',
  accentColor = '#A80000',
  density = 1.0,
  speed = 1.0,
  interaction = 'repel',
  interactionRadius = 160,
  interactionStrength = 1.0,
  holdToGather = true,
  flowAngle = -0.6,
  paused = false,
  starCount: starCountProp,
  halftoneSides = true,
  static: isStatic = false,
  className = '',
  onError,
}) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const animationRef = useRef(0);
  const starsRef = useRef([]);
  const dotsRef = useRef([]);
  const pointerRef = useRef({ x: 0, y: 0, active: false, down: false });
  const timeRef = useRef(0);
  const sizeRef = useRef({ w: 800, h: 600 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const root = rootRef.current;
    if (!canvas || !root) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) {
      onError?.(new Error('2D canvas not supported'));
      return;
    }

    let w = 1, h = 1, dpr = 1;
    let lastTime = performance.now();

    const resize = () => {
      const rect = root.getBoundingClientRect();
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      sizeRef.current = { w, h };

      const explicitStarCount = starCountProp != null ? starCountProp : Math.max(2, Math.floor(3.5 * density));
      const targetStars = Math.max(1, explicitStarCount);
      const targetDots = Math.max(40, Math.floor(280 * density));

      if (starsRef.current.length === 0) {
        starsRef.current = createStars(targetStars, w, h, true); // bias right
      } else {
        while (starsRef.current.length < targetStars) {
          starsRef.current.push(...createStars(1, w, h, true));
        }
        starsRef.current.length = Math.min(starsRef.current.length, targetStars + 1);
      }

      if (dotsRef.current.length === 0 || Math.abs(dotsRef.current.length - targetDots) > targetDots * 0.5) {
        dotsRef.current = createFieldDots(targetDots, w, h);
      }
    };

    const ro = new ResizeObserver(resize);
    ro.observe(root);
    resize();

    const pointer = pointerRef.current;

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onPointerLeave = () => { pointer.active = false; };
    const onPointerDown = () => { pointer.down = true; };
    const onPointerUp = () => { pointer.down = false; };

    canvas.addEventListener('pointermove', onPointerMove, { passive: true });
    canvas.addEventListener('pointerleave', onPointerLeave, { passive: true });
    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);

    // touch support
    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        pointer.x = e.touches[0].clientX - rect.left;
        pointer.y = e.touches[0].clientY - rect.top;
        pointer.active = true;
      }
    };
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    canvas.addEventListener('touchend', () => { pointer.active = false; pointer.down = false; });

    const applyForce = (px, py, dx, dy, strength, radius, isAttract) => {
      const dist = Math.hypot(dx, dy) || 0.001;
      if (dist > radius) return { fx: 0, fy: 0 };
      const falloff = Math.pow(1 - dist / radius, 1.6);
      const dir = isAttract ? 1 : -1;
      const f = dir * strength * falloff * 0.9;
      return { fx: (dx / dist) * f, fy: (dy / dist) * f };
    };

    const step = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      if (paused) {
        animationRef.current = requestAnimationFrame(step);
        return;
      }

      timeRef.current += dt * speed;
      const t = timeRef.current;
      const { w: W, h: H } = sizeRef.current;
      const p = pointer;
      const isGathering = holdToGather && p.down && p.active;
      const isRepelling = interaction === 'repel' && p.active && !isGathering;

      const flowX = Math.cos(flowAngle) * 9;
      const flowY = Math.sin(flowAngle) * 9;

      // === Update loose field dots ===
      const dots = dotsRef.current;
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];

        // base flow + turbulence (very subtle for clean look)
        d.vx = d.vx * 0.98 + flowX * 0.003 + Math.sin(t * 0.7 + d.seed) * 2.2;
        d.vy = d.vy * 0.98 + flowY * 0.003 + Math.cos(t * 0.65 + d.seed * 1.1) * 2.2;

        // mouse interaction
        if (p.active) {
          const dx = d.x - p.x;
          const dy = d.y - p.y;
          if (isGathering) {
            const f = applyForce(p.x, p.y, dx, dy, 210 * interactionStrength, interactionRadius * 1.35, true);
            d.vx += f.fx * 1.6;
            d.vy += f.fy * 1.6;
          } else if (isRepelling) {
            const f = applyForce(p.x, p.y, dx, dy, 170 * interactionStrength, interactionRadius, false);
            d.vx += f.fx;
            d.vy += f.fy;
          }
        }

        d.x += d.vx * dt * speed;
        d.y += d.vy * dt * speed;

        // soft wrap with slight inward bias
        if (d.x < -20) d.x = W + 10;
        if (d.x > W + 20) d.x = -10;
        if (d.y < -20) d.y = H + 10;
        if (d.y > H + 20) d.y = -10;

        // slow velocity damping
        d.vx *= 0.992;
        d.vy *= 0.992;
      }

      // === Update stars ===
      const stars = starsRef.current;
      for (let s = 0; s < stars.length; s++) {
        const star = stars[s];

        // very gentle, elegant movement (close to reference image)
        star.vx = star.vx * 0.975 + flowX * 0.006 + Math.sin(t * 0.35 + s) * 1.4;
        star.vy = star.vy * 0.975 + flowY * 0.006 + Math.cos(t * 0.32 + s * 1.4) * 1.4;
        star.vr = star.vr * 0.985 + (Math.sin(t * 0.18 + s * 2.2) * 0.008);

        if (p.active) {
          const dx = star.cx - p.x;
          const dy = star.cy - p.y;
          if (isGathering) {
            const f = applyForce(p.x, p.y, dx, dy, 260 * interactionStrength, interactionRadius * 1.5, true);
            star.vx += f.fx * 0.8;
            star.vy += f.fy * 0.8;
          } else if (isRepelling) {
            const f = applyForce(p.x, p.y, dx, dy, 140 * interactionStrength, interactionRadius * 0.95, false);
            star.vx += f.fx * 1.3;
            star.vy += f.fy * 1.3;
          }
        }

        star.cx += star.vx * dt * speed * 0.65;
        star.cy += star.vy * dt * speed * 0.65;
        star.rot += star.vr * dt * speed;

        // soft bounds for stars (they drift but don't fly away forever)
        const margin = 90;
        if (star.cx < margin) { star.cx = margin; star.vx = Math.abs(star.vx) * 0.6; }
        if (star.cx > W - margin) { star.cx = W - margin; star.vx = -Math.abs(star.vx) * 0.6; }
        if (star.cy < margin) { star.cy = margin; star.vy = Math.abs(star.vy) * 0.6; }
        if (star.cy > H - margin) { star.cy = H - margin; star.vy = -Math.abs(star.vy) * 0.6; }

        // breathing scale (subtle)
        star.scale = 0.96 + Math.sin(t * 0.9 + star.phase) * 0.07;
      }

      // === DRAW ===
      ctx.clearRect(0, 0, W, H);

      // Halftone side patterns (matching reference image)
      if (halftoneSides) {
        drawHalftone(ctx, W, H, dotColor);
      }

      // draw field dots (main color) — very light ambient
      ctx.fillStyle = dotColor;
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const r = d.size * 0.9;
        ctx.globalAlpha = d.alpha * 0.7;
        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, TAU);
        ctx.fill();
      }

      // draw stars
      for (let s = 0; s < stars.length; s++) {
        const star = stars[s];
        const col = star.colorMix ? accentColor : dotColor;
        ctx.fillStyle = col;
        ctx.globalAlpha = 1;

        const c = Math.cos(star.rot);
        const si = Math.sin(star.rot);
        const sc = star.scale;

        const pts = star.template;
        for (let p = 0; p < pts.length; p++) {
          const pt = pts[p];
          // rotate + scale + translate
          const rx = (pt.ox * c - pt.oy * si) * sc;
          const ry = (pt.ox * si + pt.oy * c) * sc;
          const x = star.cx + rx;
          const y = star.cy + ry;
          const r = pt.size * sc * 0.95;

          ctx.beginPath();
          ctx.arc(x, y, r, 0, TAU);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;

      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationRef.current);
      ro.disconnect();
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerleave', onPointerLeave);
      canvas.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('touchmove', onTouchMove);
    };
  }, [density, speed, interaction, interactionRadius, interactionStrength, holdToGather, paused, dotColor, accentColor, flowAngle, starCountProp, halftoneSides, onError]);

  return (
    <div
      ref={rootRef}
      className={`dotted-stars ${className}`}
      style={{ backgroundColor }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="dotted-stars__canvas" />
    </div>
  );
}
