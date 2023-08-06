import { Breadcrumb } from "antd";

// -----------------------------------------------------------------

export const Breadcrumbs = () => {
  return (
    <Breadcrumb
      style={{ margin: "16px 0" }}
      items={[{ title: "Item 1" }, { title: "Item 2" }]}
    />
  );
};
