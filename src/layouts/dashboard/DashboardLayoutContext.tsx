import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

// -----------------------------------------------------------------

export type DashbaordLayoutContextType = {
  collapsed: boolean;

  updateContextValue: (
    payload: Partial<Omit<DashbaordLayoutContextType, "updateContextValue">>
  ) => void;
};

// -----------------------------------------------------------------

const defaultDashbaordLayoutContextValue: DashbaordLayoutContextType = {
  collapsed: false,

  updateContextValue: () => {},
};

// -----------------------------------------------------------------

export const DashbaordLayoutContext = createContext<DashbaordLayoutContextType>(
  defaultDashbaordLayoutContextValue
);

// -----------------------------------------------------------------

type DashbaordLayoutContextProviderProps = PropsWithChildren;

export const DashbaordLayoutContextProvider = ({
  children,
}: DashbaordLayoutContextProviderProps) => {
  const [contextValue, setContextValue] = useState<DashbaordLayoutContextType>(
    defaultDashbaordLayoutContextValue
  );

  const updateContextValue: DashbaordLayoutContextType["updateContextValue"] =
    useCallback((payload) => {
      setContextValue((prev) => ({ ...prev, ...payload }));
    }, []);

  const memoizedValue = useMemo(
    () => ({
      ...contextValue,
      updateContextValue,
    }),
    [contextValue, updateContextValue]
  );

  return (
    <DashbaordLayoutContext.Provider value={memoizedValue}>
      {children}
    </DashbaordLayoutContext.Provider>
  );
};

// -----------------------------------------------------------------

export const useDashbaordLayoutContext = () => {
  const contextValue = useContext(DashbaordLayoutContext);

  return { ...contextValue };
};
