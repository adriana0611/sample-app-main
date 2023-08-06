import { Spin } from "antd";

import { useAppData } from "../hooks/useAppData";
import { AuthNavigator } from "./AuthNavigator";
import { UnauthNavigator } from "./UnauthNavigator";

// -----------------------------------------------------------------

export const RootNavigator = () => {
  const [data] = useAppData();

  console.log("data = ", data);

  const isLoggedIn = true;

  if (!data) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  return <>{isLoggedIn ? <AuthNavigator /> : <UnauthNavigator />}</>;
};
