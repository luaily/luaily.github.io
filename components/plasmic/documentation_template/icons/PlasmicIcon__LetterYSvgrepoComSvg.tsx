/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LetterYSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LetterYSvgrepoComSvgIcon(props: LetterYSvgrepoComSvgIconProps) {
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
          "M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30 30-13.432 30-30S48.568 2 32 2m3.198 33.627v10.881h-6.063V35.627L19.096 17.492h7.146l6.023 12.637 5.769-12.637h6.87z"
        }
      ></path>
    </svg>
  );
}

export default LetterYSvgrepoComSvgIcon;
/* prettier-ignore-end */
