import { Divider, Layout, Menu } from "antd";

import { ProductCategorySwitcher } from "../../../components/product-category-switcher";
import { useDashbaordLayoutContext } from "../DashboardLayoutContext";
import { useMenuItems } from "./useMenuItems";

// -----------------------------------------------------------------

export const Sidebar = () => {
  const { collapsed, updateContextValue: updateDashboardLayout } =
    useDashbaordLayoutContext();

  const { items } = useMenuItems();

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(collapsed) => updateDashboardLayout({ collapsed })}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 32,
          paddingBottom: 32,
        }}
      >
        {!collapsed && <ProductCategorySwitcher />}
      </div>

      <Divider style={{ borderColor: "#ffffff40", marginTop: 0 }} />

      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Layout.Sider>
  );
};
