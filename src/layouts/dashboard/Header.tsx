import { Layout, theme } from "antd";

// -----------------------------------------------------------------

export const Header = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout.Header style={{ padding: 0, background: colorBgContainer }}>
      {/* Header UI */}
    </Layout.Header>
  );
};
