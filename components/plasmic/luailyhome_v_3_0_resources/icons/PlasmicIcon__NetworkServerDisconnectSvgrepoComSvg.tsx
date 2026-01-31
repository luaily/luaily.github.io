/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NetworkServerDisconnectSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function NetworkServerDisconnectSvgrepoComSvgIcon(
  props: NetworkServerDisconnectSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      baseProfile={"full"}
      version={"1.1"}
      viewBox={"0 0 76 76"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillOpacity={"1"}
        d={
          "M19 22h38v9H19zm36 2h-2v5h2zm-4 0h-2v5h2zm-4 0h-2v5h2zm-26 3v2h2v-2zm-2 6h38v9H19zm36 2h-2v5h2zm-4 0h-2v5h2zm-4 0h-2v5h2zm-26 3v2h2v-2zm25.75 15H57v4H46.75l-2-2zm-17.5 0 2 2-2 2H19v-4zm.265 6.993L34.507 55l-4.992-4.993 3.492-3.492L38 51.507l4.993-4.992 3.492 3.492L41.743 55l4.742 4.993-3.492 3.492L38 58.743l-4.993 4.742zM36 46.25V44h4v2.25l-2 2z"
        }
      ></path>
    </svg>
  );
}

export default NetworkServerDisconnectSvgrepoComSvgIcon;
/* prettier-ignore-end */
