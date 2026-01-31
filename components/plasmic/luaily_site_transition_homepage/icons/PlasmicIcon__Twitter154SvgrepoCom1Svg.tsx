/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Twitter154SvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Twitter154SvgrepoCom1SvgIcon(
  props: Twitter154SvgrepoCom1SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 -2 20 20"}
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
          "M6.29 16c7.547 0 11.675-6.156 11.675-11.495 0-.175 0-.349-.012-.522A8.3 8.3 0 0 0 20 1.89a8.3 8.3 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.293a8.3 8.3 0 0 1-2.606.98 4.153 4.153 0 0 0-5.806-.175 4 4 0 0 0-1.187 3.86A11.72 11.72 0 0 1 1.392.738 4.005 4.005 0 0 0 2.663 6.13 4.1 4.1 0 0 1 .8 5.625v.051C.801 7.6 2.178 9.255 4.092 9.636a4.14 4.14 0 0 1-1.852.069c.537 1.646 2.078 2.773 3.833 2.806A8.32 8.32 0 0 1 0 14.185a11.75 11.75 0 0 0 6.29 1.812"
        }
      ></path>
    </svg>
  );
}

export default Twitter154SvgrepoCom1SvgIcon;
/* prettier-ignore-end */
