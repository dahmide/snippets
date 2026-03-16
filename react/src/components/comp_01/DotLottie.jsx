import { useRef, useCallback, useMemo } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import clsx from "clsx";
import { hexToCSSFilter } from "hex-to-css-filter";

import classes from "./DotLottie.module.scss";

const isValidHex = (hex) => /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex);

export default function DotLottie({
  playOnHover = false,
  className,
  style,
  size = 50,
  color,
  autoplay,
  dotLottieRefCallback,
  ...rest
}) {
  if (process.env.NODE_ENV === "development" && playOnHover && autoplay) {
    console.warn("DotLottie: `autoplay` is ignored when `playOnHover` is true.");
  }

  const dotLottieRef = useRef(null);

  const handleRef = useCallback(
    (instance) => {
      dotLottieRef.current = instance;
      dotLottieRefCallback?.(instance);
    },
    [dotLottieRefCallback]
  );

  const handleMouseEnter = useCallback(() => {
    dotLottieRef.current?.play();
  }, []);

  const handleMouseLeave = useCallback(() => {
    dotLottieRef.current?.pause();
  }, []);

  const colorFilter = useMemo(
    () => (color && isValidHex(color) ? hexToCSSFilter(color).filter : undefined),
    [color]
  );

  return (
    <div
      className={clsx(classes.lottie, className)}
      style={{
        "--lottie-size": isNaN(size) ? size : `${parseFloat(size)}px`,
        ...(colorFilter && { filter: colorFilter }),
        ...style,
      }}
      onMouseEnter={playOnHover ? handleMouseEnter : undefined}
      onMouseLeave={playOnHover ? handleMouseLeave : undefined}
    >
      <DotLottieReact
        autoplay={playOnHover ? false : autoplay}
        dotLottieRefCallback={handleRef}
        {...rest}
      />
    </div>
  );
}
