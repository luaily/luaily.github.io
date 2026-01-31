/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Warning20PxSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Warning20PxSvgrepoComSvgIcon(
  props: Warning20PxSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19.79 16.72 11.06 1.61a1.19 1.19 0 0 0-2.06 0L.2 16.81c-.47.83-.08 2.19.85 2.19H19c.92 0 1.26-1.45.79-2.28M11 17H9v-2h2Zm0-4H9l-.24-8h2.45Z"
        }
      ></path>
    </svg>
  );
}

export default Warning20PxSvgrepoComSvgIcon;
/* prettier-ignore-end */
