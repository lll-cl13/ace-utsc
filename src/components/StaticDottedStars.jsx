import { useEffect, useRef } from 'react';

const TAU = Math.PI * 2;

function drawHalftone(ctx, w, h, color) {
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.52;

  const spacing = 10;
  const maxRadius = 2.5;

  // Bottom-right halftone only (left vertical removed)
  const cx = w * 0.8;
  const cy = h * 0.82;
  const maxDist = Math.min(w, h) * 0.52;

  for (let y = h * 0.45; y < h; y += spacing) {
    for (let x = w * 0.5; x < w; x += spacing) {
      const dist = Math.hypot(x - cx, y - cy);
      if (dist > maxDist) continue;
      const fade = Math.pow(1 - dist / maxDist, 1.55);
      const r = maxRadius * fade * 0.92;
      if (r > 0.28) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, TAU);
        ctx.fill();
      }
    }
  }

  ctx.globalAlpha = 1;
}

export default function StaticDottedStars({
  backgroundColor = '#ffffff',
  dotColor = '#0f172a',
  className = '',
}) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const root = rootRef.current;
    if (!canvas || !root) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w = 1, h = 1, dpr = 1;

    const resize = () => {
      const rect = root.getBoundingClientRect();
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Draw once (static)
      ctx.clearRect(0, 0, w, h);

      // Halftone patterns (bottom right only)
      drawHalftone(ctx, w, h, dotColor);

      ctx.globalAlpha = 1;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(root);
    resize();

    return () => {
      ro.disconnect();
    };
  }, [dotColor]);

  return (
    <div
      ref={rootRef}
      className={`dotted-stars ${className}`}
      style={{ backgroundColor, pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="dotted-stars__canvas" />
    </div>
  );
}
