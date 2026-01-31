/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CraneSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CraneSvgrepoComSvgIcon(props: CraneSvgrepoComSvgIconProps) {
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
          "M106.142 333.553C117.537 241.607 129.675 149.104 139.868 57m-.001 6.745c16.348 62.358 20.18 241.491 39.122 279.251M94 119.055c15.05-12.289 28.16-26.635 41.82-40.471m4.047 2.699c53.359 17.874 111.923 17.828 165.932 29.679m-207.752 8.094c75.432-1.165 151.284-4.047 226.639-4.047m-12.226 4.047c-.607 26.933-1.186 53.966-1.186 80.942"
        }
        stroke={"currentColor"}
        strokeOpacity={".9"}
        strokeWidth={"16"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M263.57 206.824c77.089-8.224 79.185-29.102 79.185 39.322 0 2.298 1.84 22.489 0 23.717-2.113 1.407-31.798-2.86-36.164-2.498-67.953 5.67-40.516 1.965-48.008-58.042m-145.696 112.09c10.007-4.393 19.167-11.597 29.328-15.681 95.404-38.372-24.96-30.863-24.96-53.953 0-9.325 48.666-26.403 48.666-33.251 0-11.378-37.46-10.131-41.177-25.095-3.546-14.254 64.985-26.026 8.111-51.443"
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

export default CraneSvgrepoComSvgIcon;
/* prettier-ignore-end */
