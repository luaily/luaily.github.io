/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DrawingSvgVectors3SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DrawingSvgVectors3SvgIcon(
  props: DrawingSvgVectors3SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15 7.5l2.5 2.5m-10 10L19.25 8.25c.69-.69.69-1.81 0-2.5v0c-.69-.69-1.81-.69-2.5 0L5 17.5V20h2.5zm0 0h8.379C17.05 20 18 19.05 18 17.879v0c0-.563-.224-1.103-.621-1.5L17 16M4.5 5c2-2 5.5-1 5.5 1 0 2.5-6 2.5-6 5 0 .876.533 1.526 1.226 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DrawingSvgVectors3SvgIcon;
/* prettier-ignore-end */
