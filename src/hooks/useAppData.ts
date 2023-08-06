import { defaultData } from "../consts/defaultData";
import useLocalStorage from "./useLocalStorage";

// ----------------------------------------------------------------------

export const useAppData = () => {
  const [data, setData] = useLocalStorage("data", defaultData);

  return [data, setData];
};
