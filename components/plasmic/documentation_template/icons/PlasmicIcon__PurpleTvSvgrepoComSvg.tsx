/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PurpleTvSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PurpleTvSvgrepoComSvgIcon(
  props: PurpleTvSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      viewBox={"0 0 192 192"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"12"}
        d={
          "M159.8 22H59.1L32.2 47.7V170l26.4-26.8h53.7L159.8 96zM71.2 52h58.6v39.1l-16 16.9H71.2z"
        }
      ></path>
    </svg>
  );
}

export default PurpleTvSvgrepoComSvgIcon;
/* prettier-ignore-end */
