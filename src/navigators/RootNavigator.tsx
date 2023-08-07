import { useCallback, useEffect } from "react";
import { Spin } from "antd";
import { useSampleAppContext } from "sample-app-shared/dist/esm/contexts/sample-app";

import { AuthNavigator } from "./AuthNavigator";
import { UnauthNavigator } from "./UnauthNavigator";

// -----------------------------------------------------------------

export const RootNavigator = () => {
  const { data, updateAppContext } = useSampleAppContext();

  const fetchData = useCallback(async () => {
    const res = await fetch(`https://restcountries.com/v3.1/name/portugal`);

    if (res) {
      const resObj = await res.json();

      if (resObj && resObj.length > 0) {
        const data = resObj[0];

        updateAppContext({ data });
      }
    }
    // eslint-disable-next-line
  }, []);

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
