/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LetterZSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LetterZSvgrepoComSvgIcon(props: LetterZSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      aria-hidden={"true"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "iconify iconify--emojione-monotone"
      )}
      preserveAspectRatio={"xMidYMid meet"}
      role={"img"}
      viewBox={"0 0 64 64"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30 30-13.432 30-30S48.568 2 32 2m11.201 44.508H20.799V41.39L35.63 22.63H21.173v-5.138h21.988v4.861L28.139 41.39h15.063z"
        }
      ></path>
    </svg>
  );
}

export default LetterZSvgrepoComSvgIcon;
/* prettier-ignore-end */
