import { Select } from "antd";
import {
  SampleAppContextData,
  useSampleAppContext,
} from "sample-app-shared/dist/esm/contexts/sample-app";

import "./style.scss";

// -----------------------------------------------------------------

export const ProductCategorySwitcher = () => {
  const { product, updateAppContext } = useSampleAppContext();

  const handleChange = (product: SampleAppContextData["product"]) => {
    updateAppContext({ product });
  };

  return (
    <Select
      value={product}
      options={[{ value: "Product 1" }, { value: "Product 2" }]}
      onChange={handleChange}
      bordered={false}
      className="product-category-switcher"
    />
  );
};
