import { DashbaordLayoutContextProvider } from "./DashboardLayoutContext";
import { DashboardLayoutUI } from "./DashboardLayoutUI";

// -----------------------------------------------------------------

export const DashboardLayout = () => {
  return (
    <DashbaordLayoutContextProvider>
      <DashboardLayoutUI />
    </DashbaordLayoutContextProvider>
  );
};
