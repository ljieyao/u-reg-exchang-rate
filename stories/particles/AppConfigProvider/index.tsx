import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext<AppConfig>({
  API_LAYER_API_KEY: "",
});

const AppConfigProvider: React.FunctionComponent = ({ children }) => {
  const [appConfig, setAppConfig] = useState<AppConfig>({
    API_LAYER_API_KEY: "",
  });

  useEffect(() => {
    fetch("/api/appConfig", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setAppConfig(data));
  }, []);

  return <Context.Provider value={appConfig}>{children}</Context.Provider>;
};

const useAppConfig = (): AppConfig => {
  return useContext(Context);
};

export { Context, useAppConfig };
export default AppConfigProvider;
