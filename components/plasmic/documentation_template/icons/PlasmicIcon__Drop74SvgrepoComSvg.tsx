/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Drop74SvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Drop74SvgrepoComSvgIcon(props: Drop74SvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"-1.5 0 15 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={"M12 9A6 6 0 1 1 0 9c0-3.314 4.5-9 6-9s6 5.686 6 9"}
      ></path>
    </svg>
  );
}

export default Drop74SvgrepoComSvgIcon;
/* prettier-ignore-end */
