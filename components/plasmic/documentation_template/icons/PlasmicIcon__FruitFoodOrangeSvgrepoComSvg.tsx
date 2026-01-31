/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FruitFoodOrangeSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function FruitFoodOrangeSvgrepoComSvgIcon(
  props: FruitFoodOrangeSvgrepoComSvgIconProps
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
          "M13.5 20c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5H6c0 3.3 2.7 6 6 6s6-2.7 6-6z"
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
          "M13.5 20c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5H3c0 5 4 9 9 9s9-4 9-9zm-.8 1.3 2.3 4m-6 0 2.3-4m11.4-13c-1.8 1.8-5.3 1.3-5.3 1.3s-.5-3.5 1.3-5.3S24 3 24 3s.5 3.5-1.3 5.3"
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
          "M22.9 8.1C26.5 9.9 29 13.7 29 18c0 6.1-4.9 11-11 11-1.1 0-2.1-.1-3-.4M17.4 7c-5.1.3-9.3 4.1-10.2 9"
        }
      ></path>
    </svg>
  );
}

export default FruitFoodOrangeSvgrepoComSvgIcon;
/* prettier-ignore-end */
