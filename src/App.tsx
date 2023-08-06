import { BrowserRouter } from "react-router-dom";

import { RootNavigator } from "./navigators/RootNavigator";

// -----------------------------------------------------------------

function App() {
  return (
    <BrowserRouter>
      <RootNavigator />
    </BrowserRouter>
  );
}

export default App;
