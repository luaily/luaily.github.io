/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LaptopWorkSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LaptopWorkSvgrepoComSvgIcon(
  props: LaptopWorkSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 400 400"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M147.401 313.003c-107.552 0-105.102 0-60.288-103.477v65.944m237.444-47.524c-20.128-.754-129.136-1.681-137.024 6.209-11.379 11.382-39.529 89.958-28.259 104.988 76.589 1.459 134.506 3.018 145.834-1.514 5.846-2.339 10.516-9.064 13.12-15.142 2.062-4.814 23.716-78.188 23.716-80.256m-186.366 96.235c-16.192-6.119-33.17-11.498-48.759-19.504m2.466-194.082c-25.29 83.084 87.857 118.273 117.821 34.735 16.243-45.286-38.407-111.944-94.425-61.913m55.021 60.091c1.036-2.8 1.775-4.442 2.354-7.158m-25.733 6.672c1.087-2.232 1.267-4.233 1.692-6.757"
        }
        stroke={"currentColor"}
        strokeOpacity={".9"}
        strokeWidth={"16"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LaptopWorkSvgrepoComSvgIcon;
/* prettier-ignore-end */
