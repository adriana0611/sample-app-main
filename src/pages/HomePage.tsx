import { HomeOutlined } from "@ant-design/icons";
import { Button, Card, Result } from "antd";
import { Link } from "react-router-dom";
import { useSampleAppContext } from "sample-app-shared/dist/esm/contexts/sample-app";

// -----------------------------------------------------------------

export const HomePage = () => {
  const { product, name } = useSampleAppContext();

  const title = `${name}${name ? "," : ""} Welcome to ${product}!`.trim();

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
