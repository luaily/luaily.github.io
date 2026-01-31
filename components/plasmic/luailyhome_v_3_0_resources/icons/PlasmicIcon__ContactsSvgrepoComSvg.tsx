/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ContactsSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ContactsSvgrepoComSvgIcon(
  props: ContactsSvgrepoComSvgIconProps
) {
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
        fillRule={"evenodd"}
        d={
          "M23 4a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3zm-2 0a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1z"
        }
        clipRule={"evenodd"}
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M9.977 8a2.023 2.023 0 1 0 4.046 0 2.023 2.023 0 0 0-4.046 0"
        }
      ></path>

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M5.4 16.68C6.49 13.83 9.47 13 12 13s5.51.829 6.6 3.68c.35.915.083 1.796-.464 2.398-.526.58-1.314.922-2.136.922H8c-.822 0-1.61-.342-2.136-.922-.547-.602-.815-1.483-.465-2.397M12 15c-2.277 0-4.101.743-4.733 2.395-.049.128-.012.24.078.339.13.143.372.266.655.266h8a.9.9 0 0 0 .655-.266c.09-.1.127-.211.078-.339C16.1 15.743 14.277 15 12 15"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default ContactsSvgrepoComSvgIcon;
/* prettier-ignore-end */
