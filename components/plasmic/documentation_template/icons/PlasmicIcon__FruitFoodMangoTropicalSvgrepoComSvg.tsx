/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FruitFoodMangoTropicalSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function FruitFoodMangoTropicalSvgrepoComSvgIcon(
  props: FruitFoodMangoTropicalSvgrepoComSvgIconProps
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
          "M22.5 20.8c-1.8 4.2-9.6 9.7-14 7.9-5-2.1-.8-5.1-1.6-10.1-1.3-8.2 6.6-10.5 10.9-8.7s6.4 6.6 4.7 10.9M20.7 3.2l-2.8 6.7M26 7.8c-2.4-1.9-6.7-.7-6.7-.7h0c3.7 1.9 6.9 4.7 9.2 8.1l.5.8s1-5-3-8.2"
        }
      ></path>
    </svg>
  );
}

export default FruitFoodMangoTropicalSvgrepoComSvgIcon;
/* prettier-ignore-end */
