import { useEffect } from 'react';
import GlowCursor from './GlowCursor';

export default function Cursor(props) {
  useEffect(() => {
    const prev = document.body.style.cursor;
    document.body.style.cursor = 'none';
    return () => { document.body.style.cursor = prev || 'auto'; };
  }, []);

  return (
    <GlowCursor
      global
      color="#0171FF"
      secondaryColor="#A78BFA"
      trailLength={24}
      trailWidth={5}
      trailTaper={0.27}
      followSpeed={0.16}
      glowIntensity={1.75}
      glowSpread={1.2}
      hotspot={0.65}
      brightness={1.25}
      opacity={0.74}
      pulseSpeed={1.1}
      noiseStrength={0.035}
      idleFade
      idleTimeout={700}
      fadeDuration={900}
      blendMode="screen"
      {...props}
    />
  );
}

