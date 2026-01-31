/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LetterXSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LetterXSvgrepoComSvgIcon(props: LetterXSvgrepoComSvgIconProps) {
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
          "M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30 30-13.432 30-30S48.568 2 32 2m5.513 44.508-5.514-9.894-5.825 9.894h-7.048l9.331-14.783-8.878-14.232h7.244l5.175 9.449 5.317-9.449h7.008l-8.878 13.996 9.429 15.02z"
        }
      ></path>
    </svg>
  );
}

export default LetterXSvgrepoComSvgIcon;
/* prettier-ignore-end */
