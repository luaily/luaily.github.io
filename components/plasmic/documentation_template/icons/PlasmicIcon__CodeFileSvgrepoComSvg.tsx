/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CodeFileSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CodeFileSvgrepoComSvgIcon(
  props: CodeFileSvgrepoComSvgIconProps
) {
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
        fillRule={"evenodd"}
        d={
          "M9.293 1.293A1 1 0 0 1 10 1h8a3 3 0 0 1 3 3v5a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1h-7v5a1 1 0 0 1-1 1H5v11a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3V8a1 1 0 0 1 .293-.707zM6.414 7H9V4.414zm12.293 5.293 4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L20.586 17l-3.293-3.293a1 1 0 0 1 1.414-1.414m-4 1.414a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L11.414 17z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default CodeFileSvgrepoComSvgIcon;
/* prettier-ignore-end */
