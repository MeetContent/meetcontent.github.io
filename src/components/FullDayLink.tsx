import Link from '@docusaurus/Link';
import pointing from './pointing.png';
import { useEffect, useRef, useState } from 'react';

export default function FullDayLink() {
  const buttonRef = useRef<HTMLAnchorElement>();
  const [buttonSize, setButtonSize] = useState({
    width: 265,
    height: 47,
  });

  useEffect(() => {
    if (buttonRef.current) {
      const { width, height } = buttonRef.current.getBoundingClientRect();
      setButtonSize({
        width,
        height,
      });
    }
  }, [buttonRef, buttonRef.current]);

  return (
    <div
      className="container"
      style={{
        height: '300px',
        backgroundImage: `url(${pointing})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        marginBottom: '2rem',
      }}
    >
      <Link
        ref={buttonRef}
        href="/full-day"
        className="button button--lg button--secondary"
        style={{
          position: 'absolute',
          top: `calc(30% - (${buttonSize.height}px / 2))`,
          left: `calc(50% - (${buttonSize.width}px / 2))`,
        }}
      >
        Chec out our full day event
      </Link>
    </div>
  );
}
