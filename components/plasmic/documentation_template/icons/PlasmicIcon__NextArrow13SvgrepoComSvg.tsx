/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NextArrow13SvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NextArrow13SvgrepoComSvgIcon(
  props: NextArrow13SvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 -4 20 20"}
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
          "M9.121 5.293 8.414 6l.707.707a.999.999 0 1 1-1.414 1.414L7 7.414l-.707.707a1 1 0 1 1-1.415-1.414L5.585 6l-.707-.707a1 1 0 0 1 1.415-1.414L7 4.586l.707-.707a.999.999 0 1 1 1.414 1.414M12.8 9.9a.5.5 0 0 1-.3.1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9.5a.5.5 0 0 1 .3.1L18 6zm6.4-5.5L13.6.2A1 1 0 0 0 13 0H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a1 1 0 0 0 .6-.2l5.6-4.2a2 2 0 0 0 0-3.2"
        }
      ></path>
    </svg>
  );
}

export default NextArrow13SvgrepoComSvgIcon;
/* prettier-ignore-end */
