import { useCallback, useEffect, useRef } from 'react';

const LOGO_SRC = 'https://aceuoft.wordpress.com/wp-content/uploads/2023/09/ace-utsc-logo-1.png';

export default function WelcomeScreen({ onComplete }) {
  const doneRef = useRef(false);
  const timerRef = useRef(null);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    timerRef.current = setTimeout(finish, 3500);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [finish]);

  const handleSkip = () => finish();

  return (
    <div
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center cursor-pointer"
      onClick={handleSkip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleSkip();
      }}
      aria-label="Welcome screen. Click to continue."
    >
      <div className="text-center">
        <img
          src={LOGO_SRC}
          alt="ACE UTSC Logo"
          className="mx-auto mb-4 h-16 md:h-20"
        />
        <h1 className="text-6xl md:text-7xl font-semibold tracking-[-2px] text-[#222]">
          ACE UTSC
        </h1>
      </div>
    </div>
  );
}