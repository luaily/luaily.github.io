/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MachineLearningIconsSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MachineLearningIconsSvgIcon(
  props: MachineLearningIconsSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {})
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Layer 2"}>
        <path
          fill={"none"}
          d={"M0 0h48v48H0z"}
          data-name={"invisible box"}
        ></path>

        <g data-name={"Q3 icons"}>
          <path
            d={
              "M31 33a2 2 0 002-2v-3h1.5a1.5 1.5 0 000-3H33v-2h1.5a1.5 1.5 0 000-3H33v-3a2 2 0 00-2-2h-3v-1.5a1.5 1.5 0 00-3 0V15h-2v-1.5a1.5 1.5 0 00-3 0V15h-3a2 2 0 00-2 2v3h-1.5a1.5 1.5 0 000 3H15v2h-1.5a1.5 1.5 0 000 3H15v3a2 2 0 002 2h3v1.5a1.5 1.5 0 003 0V33h2v1.5a1.5 1.5 0 003 0V33zM18 18h12v12H18z"
            }
          ></path>

          <path
            d={
              "M21 21h6v6h-6zm24.6-2.3L41 14.9V7.5a1 1 0 00-.6-.9l-9.9-4.5h-.4l-.6.2-.5.3v6a1.5 1.5 0 003 0V7.2l5 2.3v7.4l1.5 1.2 3.5 2.8v6.2l-3.5 2.8-1.5 1.2v7.4l-5 2.3v-1.3a1.5 1.5 0 00-3 0v6l.5.3.6.2h.4l9.9-4.5a1 1 0 00.6-.9v-7.5l4.6-3.8a.9.9 0 00.4-.8v-9a.8.8 0 00-.4-.8zM17.9 2h-.4L7.6 6.6a1 1 0 00-.6.9v7.4l-4.6 3.8a.8.8 0 00-.4.8v9a.9.9 0 00.4.8L7 33.1v7.4a1 1 0 00.6.9l9.9 4.5h.4l.6-.2.5-.3v-6a1.5 1.5 0 00-3 0v1.3l-5-2.3v-7.3l-1.5-1.2L6 27.1v-6.2l3.5-2.8 1.5-1.2V9.5l5-2.3v1.3a1.5 1.5 0 003 0v-6l-.5-.3z"
            }
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default MachineLearningIconsSvgIcon;
/* prettier-ignore-end */
