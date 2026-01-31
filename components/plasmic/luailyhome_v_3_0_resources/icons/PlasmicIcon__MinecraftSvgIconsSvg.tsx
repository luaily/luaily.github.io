/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MinecraftSvgIconsSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MinecraftSvgIconsSvgIcon(props: MinecraftSvgIconsSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M43 31.827h0L24.016 43.049 5 32.07V21.222"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        fill={"none"}
      ></path>

      <path
        d={
          "M9.552 29.275L7.744 28.23v5.424l9.782 5.647v-1.808l-1.566-.904v-1.808l-1.888-1.09v-3.616l-4.52-2.61z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        fill={"none"}
      ></path>

      <path
        d={
          "M17.688 39.396l-9.556-5.518 3.137-1.742 2.803 1.556m20.792-16.599l-2.665-1.87-6.056 3.653 4.201 2.515V23.2l5.96 3.447 3.136-1.808L43 22.787v0l-5.424-3.815m-5.377-3.75l-.047-1.827"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        fill={"none"}
      ></path>

      <path
        d={
          "M11.245 17.596L5 21.223l12.688 7.325 12.656-7.157-5.78-3.466 7.588-4.53-6.797-3.924-4.712 2.914M30.344 23.2l-12.656 7.156v1.808l1.404.81v1.808l4.924 2.843 10.848-6.393v-1.94l1.512-.872-.071-1.773"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        fill={"none"}
      ></path>

      <path
        d={
          "M12.803 18.495l.026 3.821 1.566.714 1.565-.714V20.51l-.023-1.993-1.542.899"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        fill={"none"}
      ></path>

      <path
        d={
          "M7.744 15.575l6.65 3.84 6.006-3.468V8.418l-6.005-3.467-6.65 3.839zm27.12 6.618l1.451.837 1.261-.728V14.72l-1.26-.728-1.452.97zM43 25.499l-3.616 2.088v.904l-1.808 1.043v1.808l-1.808 1.044v3.616L43 31.827zm-25.312 3.049v1.808"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        fill={"none"}
      ></path>
    </svg>
  );
}

export default MinecraftSvgIconsSvgIcon;
/* prettier-ignore-end */
