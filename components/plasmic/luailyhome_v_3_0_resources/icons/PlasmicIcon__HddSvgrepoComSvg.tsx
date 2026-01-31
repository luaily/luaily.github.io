/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HddSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HddSvgrepoComSvgIcon(props: HddSvgrepoComSvgIconProps) {
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
        d={"M18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2"}
      ></path>

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M3.683 3.371a7150 7150 0 0 0-2.597 12.222 4 4 0 0 0-.086.826V20a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-3.581a4 4 0 0 0-.086-.826c-.374-1.764-1.865-8.805-2.597-12.222A3 3 0 0 0 17.383 1H6.617a3 3 0 0 0-2.934 2.371M6.617 3a1 1 0 0 0-.978.79L3.237 15h17.526L18.361 3.79a1 1 0 0 0-.978-.79zM21 18a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default HddSvgrepoComSvgIcon;
/* prettier-ignore-end */
