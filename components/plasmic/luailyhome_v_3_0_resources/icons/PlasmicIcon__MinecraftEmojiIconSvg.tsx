/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MinecraftEmojiIconSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MinecraftEmojiIconSvgIcon(
  props: MinecraftEmojiIconSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 12 12"}
      version={"1.1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M4 6H2v6h2v-2h4v2h2V6H8V4H4v2zm4-2h4V0H8v4zM0 4h4V0H0v4z"}
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default MinecraftEmojiIconSvgIcon;
/* prettier-ignore-end */
