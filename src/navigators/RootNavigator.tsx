import { Spin } from "antd";
import { useAppData } from "sample-app-shared/dist/esm/hooks/useAppData";

import { AuthNavigator } from "./AuthNavigator";
import { UnauthNavigator } from "./UnauthNavigator";
import { useCallback, useEffect } from "react";

// -----------------------------------------------------------------

export const RootNavigator = () => {
  const [data, setData] = useAppData();

  const fetchData = useCallback(async () => {
    const res = await fetch(`https://restcountries.com/v3.1/name/portugal`);

    if (res) {
      const resObj = await res.json();

      if (resObj && resObj.length > 0) {
        const data = resObj[0];

        setData({ data });
      }
    }
  }, [setData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
