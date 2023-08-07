import { BrowserRouter } from "react-router-dom";
import { SampleAppContextProvider } from "sample-app-shared/dist/esm/contexts/sample-app";

import { RootNavigator } from "./navigators/RootNavigator";

// -----------------------------------------------------------------

function App() {
  return (
    <SampleAppContextProvider>
      <BrowserRouter>
        <RootNavigator />
      </BrowserRouter>
    </SampleAppContextProvider>
  );
}

export default App;
