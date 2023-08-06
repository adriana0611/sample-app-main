import { PropsWithChildren } from "react";
// import { theme } from "antd";

// -----------------------------------------------------------------

type ContentContainerProps = PropsWithChildren;

export const ContentContainer = ({ children }: ContentContainerProps) => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  return (
    <div
      style={
        {
          // TODO: Define page container style
          // padding: 24,
          // minHeight: 360,
          // background: colorBgContainer,
        }
      }
    >
      {children}
    </div>
  );
};
