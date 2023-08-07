import { Select } from "antd";
import { useAppData } from "sample-app-shared/dist/esm/hooks/useAppData";

import "./style.scss";

// -----------------------------------------------------------------

export const ProductCategorySwitcher = () => {
  const [data, setData] = useAppData();
  const { category } = data;

  const handleChange = (category: string) => {
    setData({ category });
  };

  return (
    <Select
      value={category}
      options={[
        { value: "product1", label: "Product 1" },
        { value: "product2", label: "Product 2" },
      ]}
      onChange={handleChange}
      bordered={false}
      className="product-category-switcher"
    />
  );
};
