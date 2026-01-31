/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HotspotSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HotspotSvgrepoComSvgIcon(props: HotspotSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M17.193 20.542c.287.472.907.628 1.35.3a11 11 0 1 0-13.106-.014c.443.33 1.064.174 1.352-.297s.137-1.086-.3-1.424a8.993 8.993 0 1 1 11.006.012c-.437.337-.589.951-.302 1.423"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M15.074 17.152c.283.474.903.635 1.332.287a7 7 0 1 0-8.802.009c.43.346 1.05.185 1.332-.29s.117-1.082-.292-1.453a4.999 4.999 0 1 1 6.72-.007c-.41.372-.573.98-.29 1.454"
        }
      ></path>

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-1.99a1.01 1.01 0 1 1 0-2.02 1.01 1.01 0 0 1 0 2.02"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default HotspotSvgrepoComSvgIcon;
/* prettier-ignore-end */
