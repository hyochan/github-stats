import React, {CSSProperties} from 'react';
import {useEffect} from 'react';
import {useMediaQuery} from 'usehooks-ts';

export default function AdFit({
  className,
  style,
  unit,
  height,
  width,
}: {
  className: string;
  style?: CSSProperties;
  unit: string;
  width: number;
  height: number;
}): JSX.Element {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const convertedClassName = isMobile ? `${className}-mobile` : className;

  useEffect(() => {
    const timeout = setTimeout(() => {
      let ins = document.createElement('ins');
      let scr = document.createElement('script');
      ins.className = 'kakao_ad_area';
      // @ts-ignore
      ins.style = 'display:none; width:100%;';
      // @ts-ignore
      scr.async = 'true';
      scr.type = 'text/javascript';
      scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';
      ins.setAttribute('data-ad-width', width.toString());
      ins.setAttribute('data-ad-height', height.toString());
      ins.setAttribute('data-ad-unit', unit.toString());
      document.querySelector(`.${convertedClassName}`)?.appendChild(ins);
      document.querySelector(`.${convertedClassName}`)?.appendChild(scr);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [className, convertedClassName, height, unit, width]);

  return (
    <div style={style}>
      <div className={convertedClassName}></div>
    </div>
  );
}
