import { HomeOutlined } from "@ant-design/icons";
import { Button, Card, Result } from "antd";
import { Link } from "react-router-dom";
import { useAppData } from "sample-app-shared/src/hooks/useAppData";

// -----------------------------------------------------------------

export const HomePage = () => {
  const [data] = useAppData();

  const { category, name } = data;

  const categoryName = category === "product1" ? "Product 1" : "Product 2";

  const title = `${name}${name ? "," : ""} Welcome to ${categoryName}!`.trim();

  return (
    <Card>
      <Result
        icon={<HomeOutlined />}
        title={title}
        extra={[
          <Link key="1" to="/product-1/module-1">
            <Button type="primary" key="console">
              Edit Name
            </Button>
          </Link>,
        ]}
      />
    </Card>
  );
};
