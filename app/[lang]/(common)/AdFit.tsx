import React, { CSSProperties } from "react";
import { useEffect } from "react";

export default function AdFit({
  className = "adfit",
  style,
  unit,
  height,
  width,
}: {
  className?: string;
  style?: CSSProperties;
  unit: string;
  width: number;
  height: number;
}): JSX.Element {
  useEffect(() => {
    const timeout = setTimeout(() => {
      let ins = document.createElement("ins");
      let scr = document.createElement("script");
      ins.className = "kakao_ad_area";
      // @ts-ignore
      ins.style = "display:none; width:100%;";
      // @ts-ignore
      scr.async = "true";
      scr.type = "text/javascript";
      scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
      ins.setAttribute("data-ad-width", width.toString());
      ins.setAttribute("data-ad-height", height.toString());
      ins.setAttribute("data-ad-unit", unit.toString());
      document.querySelector(`.${className}`)?.appendChild(ins);
      document.querySelector(`.${className}`)?.appendChild(scr);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [className, height, unit, width]);

  return (
    <div style={style}>
      <div className={className}></div>
    </div>
  );
}
