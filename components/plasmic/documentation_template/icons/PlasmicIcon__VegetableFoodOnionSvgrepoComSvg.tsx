/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VegetableFoodOnionSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function VegetableFoodOnionSvgrepoComSvgIcon(
  props: VegetableFoodOnionSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={
          "M9.1 8.9C6 10.9 4 14.1 4 17.4 4 22.7 9.4 26 16 26s12-3.3 12-8.6c0-3.2-2-6.4-5.1-8.5-2.3-1.5-4.5-3.2-6.3-5.3L16 3"
        }
      ></path>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={
          "M16.4 3.7 16 3l-.4.7c-1.2 2-2.7 3.7-4.2 5.3C9.3 11 8 14.2 8 17.5c0 5.3 3.6 8.6 8 8.6s8-3.3 8-8.6c0-3.2-1.3-6.4-3.4-8.5-1.5-1.6-3-3.3-4.2-5.3"
        }
      ></path>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={
          "M16.1 3.7 16 3l-.1.7c-.5 2-1 3.7-1.6 5.3-.8 2-1.3 5.2-1.3 8.5 0 5.3 1.3 8.6 3 8.6s3-3.3 3-8.6c0-3.2-.5-6.4-1.3-8.5-.6-1.6-1.1-3.3-1.6-5.3M16 30v-4m3 3-3-3m-3 3 3-3"
        }
      ></path>
    </svg>
  );
}

export default VegetableFoodOnionSvgrepoComSvgIcon;
/* prettier-ignore-end */
