/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FruitFoodAnanasSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function FruitFoodAnanasSvgrepoComSvgIcon(
  props: FruitFoodAnanasSvgrepoComSvgIconProps
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

      <ellipse
        cx={"13.7"}
        cy={"18.5"}
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        rx={"10.7"}
        ry={"9.8"}
        transform={"rotate(-45.001 13.675 18.504)"}
      ></ellipse>

      <g
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
      >
        <path
          d={"M21.3 10.9c0-2.7-1.1-5.2-2.9-7.1l-.5-.5v1.4c0 1.3-.3 2.6-.8 3.8"}
        ></path>

        <path
          d={
            "M23.6 15.1c1.2-.5 2.5-.8 3.8-.8h1.4l-.5-.5c-1.9-1.9-4.4-2.9-7.1-2.9"
          }
        ></path>
      </g>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={
          "m24.6 11.5 1.5-5.4-5.4 1.5m-1.6 8.5c0-.8-.2-1.7-.9-2.3-.6-.6-1.5-.9-2.3-.9m-2.5 3.2c0-.8-.2-1.7-.9-2.3s-1.5-.9-2.3-.9m8.9 8.9c0-.8-.2-1.7-.9-2.3-.6-.6-1.5-.9-2.3-.9m-.4 6.7c0-.8-.2-1.7-.9-2.3-.6-.6-1.5-.9-2.3-.9m-2.4-2.4c0-.8-.2-1.7-.9-2.3-.6-.6-1.5-.9-2.3-.9m3.2 8.8c0-.8-.2-1.7-.9-2.3-.6-.6-1.5-.9-2.3-.9"
        }
      ></path>
    </svg>
  );
}

export default FruitFoodAnanasSvgrepoComSvgIcon;
/* prettier-ignore-end */
