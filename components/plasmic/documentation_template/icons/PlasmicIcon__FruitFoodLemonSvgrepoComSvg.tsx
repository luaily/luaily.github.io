/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FruitFoodLemonSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function FruitFoodLemonSvgrepoComSvgIcon(
  props: FruitFoodLemonSvgrepoComSvgIconProps
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
          "M26 6c-.9-.9-2.3-1.2-3.4-.9-.7.2-1.4.1-2-.1-4.2-1.5-9.1-.5-12.6 3s-4.5 8.4-3 12.5c.2.6.3 1.4.1 2-.3 1.2 0 2.6.9 3.5s2.3 1.2 3.4.9c.7-.2 1.4-.1 2 .1 4.1 1.5 9.1.5 12.5-3s4.5-8.4 3-12.5c-.2-.6-.3-1.4-.1-2 .4-1.2.1-2.6-.8-3.5"
        }
      ></path>
    </svg>
  );
}

export default FruitFoodLemonSvgrepoComSvgIcon;
/* prettier-ignore-end */
