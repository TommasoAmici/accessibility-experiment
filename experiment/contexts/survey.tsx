import { createContext, ReactNode, useState } from "react";

const initialState = {
  taskDifficulty: { value: null, touched: false },
  age: { value: null, touched: false },
  onlineShoppingFrequency: { value: null, touched: false },
  accessibilityOptions: { value: null, touched: false },
  disability: { value: null, touched: false },
  assistiveTechnology: { value: null, touched: false },
  country: { value: null, touched: false },
};

const SurveyContext = createContext<{
  data: Survey;
  setData: (key: any, value: any) => void;
}>({
  data: initialState,
  setData: () => {},
});

export const SurveyProvider = ({ children }: { children: ReactNode }) => {
  const [data, _setData] = useState<Survey>(initialState);

  const setData = (key: string, value: number | string) =>
    _setData({ ...data, [key]: { touched: true, value } });

  return <SurveyContext.Provider value={{ data, setData }}>{children}</SurveyContext.Provider>;
};

export default SurveyContext;
