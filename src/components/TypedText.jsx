import { useEffect, useRef, useState } from 'react';

/**
 * Cycles through `words`, typing one, holding, then deleting before moving to the next.
 *
 * @param {object} opts
 * @param {string[]} opts.words
 * @param {number} [opts.typeSpeed=90]    ms per character while typing
 * @param {number} [opts.deleteSpeed=45]  ms per character while deleting
 * @param {number} [opts.holdMs=1300]     ms to hold the full word before deleting
 * @param {number} [opts.pauseMs=300]     ms to pause on an empty string between words
 */
export default function TypedText({
  words,
  typeSpeed = 90,
  deleteSpeed = 45,
  holdMs = 1300,
  pauseMs = 300,
}) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState('typing'); // 'typing' | 'holding' | 'deleting' | 'pausing'
  const timer = useRef(null);

  useEffect(() => {
    if (!words || words.length === 0) return undefined;
    const current = words[wordIndex % words.length];

    if (phase === 'typing') {
      if (text.length < current.length) {
        timer.current = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          typeSpeed
        );
      } else {
        timer.current = setTimeout(() => setPhase('holding'), 0);
      }
    } else if (phase === 'holding') {
      timer.current = setTimeout(() => setPhase('deleting'), holdMs);
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timer.current = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          deleteSpeed
        );
      } else {
        timer.current = setTimeout(() => setPhase('pausing'), 0);
      }
    } else if (phase === 'pausing') {
      timer.current = setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase('typing');
      }, pauseMs);
    }

    return () => clearTimeout(timer.current);
  }, [text, phase, wordIndex, words, typeSpeed, deleteSpeed, holdMs, pauseMs]);

  return (
    <span className="typed" aria-live="polite">
      <span className="typed__text">{text}</span>
      <span className="typed__caret" aria-hidden="true" />
    </span>
  );
}
