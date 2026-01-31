/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BouncingSwordSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function BouncingSwordSvgrepoComSvgIcon(
  props: BouncingSwordSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M414.666 22.572L19.91 114.15l251.8 266.028-59.66 59.69 282.602 53.44-53.41-282.75-31.545 31.563 36.826 84.86-79.253-87.507-80.643-79.217 41.025 80.377-135.38-114.785L414.667 22.572zM232.484 215.77c11.482 0 20.787 9.308 20.787 20.79 0 2.462-.43 4.824-1.215 7.016l35.55 34.21 33.06-30.81 12.74 13.672-17.374 16.19 138.286 133.64L473.236 471l-60.515-17.447-140.55-135.84-18.096 16.86-12.74-13.67 32.578-30.358-35.418-34.082a20.78 20.78 0 01-6.01.887c-11.48 0-20.787-9.31-20.787-20.79 0-11.482 9.306-20.79 20.787-20.79zm68.883 75.617l-12.963 13.463L426.96 438.256l12.964-13.463-138.557-133.406z"
        }
      ></path>
    </svg>
  );
}

export default BouncingSwordSvgrepoComSvgIcon;
/* prettier-ignore-end */
