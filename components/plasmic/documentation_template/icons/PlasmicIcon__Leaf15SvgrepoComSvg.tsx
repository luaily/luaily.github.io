/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Leaf15SvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Leaf15SvgrepoComSvgIcon(props: Leaf15SvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 20 20"}
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
          "M12.231 14c-.762 0-2.896-.056-4.682-.135l3.572-3.571 2.9 1.232a.927.927 0 1 0 .725-1.707l-2.211-.94 2.781-2.781a.999.999 0 1 0-1.414-1.414l-1.324 1.324-.772-1.322a.967.967 0 0 0-1.67.976l1.028 1.76-5.027 5.027A140 140 0 0 1 6 7.769C6 4.208 7.3 2 13.769 2c.848 0 2.767.079 4.077.18.088 1.013.154 2.333.154 3.051C18 14 13.809 14 12.231 14M19.609.391C18.703.143 14.754 0 13.769 0 7.822 0 4 1.822 4 7.769c0 .764.087 4.509.241 6.576L.293 18.293a.999.999 0 1 0 1.414 1.414l3.948-3.948c2.067.154 5.812.241 6.576.241C18.179 16 20 11.178 20 5.231c0-.985-.144-3.934-.391-4.84"
        }
      ></path>
    </svg>
  );
}

export default Leaf15SvgrepoComSvgIcon;
/* prettier-ignore-end */
