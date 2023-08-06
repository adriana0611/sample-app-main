import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  HomeOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useAppData } from "sample-app-shared/src/hooks/useAppData";

// -----------------------------------------------------------------

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

// -----------------------------------------------------------------

export const useMenuItems = () => {
  const [data] = useAppData();
  const { category } = data;

  if (category === "product2") {
    const items: MenuItem[] = [
      getItem(<Link to="/">Home</Link>, "1", <HomeOutlined />),

      getItem("Module 3", "sub3", <MailOutlined />, [
        getItem(<Link to="/product-2/module-3">Sub Module 3</Link>, "2"),
      ]),

      getItem("Module 4", "sub4", <MailOutlined />, [
        getItem(<Link to="/common-module-2">Common Module 2</Link>, "3"),
      ]),
    ];

    return { items };
  }

  const items: MenuItem[] = [
    getItem(<Link to="/">Home</Link>, "1", <HomeOutlined />),

    getItem("Module 1", "sub1", <MailOutlined />, [
      getItem(<Link to="/product-1/module-1">Sub Module 1</Link>, "2"),
      getItem(<Link to="/common-module-1">Common Module 1</Link>, "3"),
    ]),

    getItem("Module 2", "sub2", <AppstoreOutlined />, [
      getItem(<Link to="/product-1/module-2">Sub Module 2</Link>, "4"),
    ]),

    getItem(
      <Link to="/common-module-2">Common Module 2</Link>,
      "5",
      <SettingOutlined />
    ),
  ];

  return { items };
};
