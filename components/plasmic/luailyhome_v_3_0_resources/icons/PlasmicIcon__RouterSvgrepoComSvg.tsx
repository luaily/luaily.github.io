/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RouterSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RouterSvgrepoComSvgIcon(props: RouterSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M9.226 5.332c-.304.531-.292 1.253.327 1.562.767.384 1.213-.295 1.58-.851.314-.48.668-.93 1.074-1.336C13.098 3.817 14.36 3 16 3s2.902.816 3.793 1.707c.404.404.756.853 1.07 1.329.366.555.818 1.242 1.584.858.616-.308.63-1.034.328-1.562a10 10 0 0 0-1.567-2.04C20.097 2.185 18.357 1 16 1s-4.098 1.184-5.207 2.293a10 10 0 0 0-1.567 2.039"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M14.476 6.713c-.2.196-.354.395-.458.545-.348.502-.821.98-1.489.624-.552-.294-.637-.985-.336-1.484q.065-.108.183-.28c.156-.226.389-.527.698-.83C13.68 4.69 14.669 4 16 4c1.33 0 2.319.69 2.926 1.287a6 6 0 0 1 .88 1.111c.302.5.215 1.19-.335 1.484-.668.356-1.14-.122-1.49-.624a4 4 0 0 0-.457-.545C17.114 6.31 16.602 6 16 6s-1.114.31-1.524.713M5 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2m2 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        }
      ></path>

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M15 8a1 1 0 1 1 2 0v7h3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h11zm5 9a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default RouterSvgrepoComSvgIcon;
/* prettier-ignore-end */
