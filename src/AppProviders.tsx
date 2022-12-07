import { CssBaseline } from "@mui/material";
import { App } from "App";
import { Provider } from "react-redux";
import store from "store/store";
import { GlobalStyle } from "styles/globalStyles";
import { Theme } from "styles/Theme";

export const AppProviders = () => {
  return (
    <Provider store={store}>
      <Theme>
        <CssBaseline />
        <GlobalStyle />
        <App />
      </Theme>
    </Provider>
  );
};
