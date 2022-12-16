import { App } from "App";
import { Provider } from "react-redux";
import { store } from "store/store";
import { GlobalStyle } from "styles/globalStyles";
import { Theme } from "styles/Theme";

export const AppProviders = () => {
  return (
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        <App />
      </Theme>
    </Provider>
  );
};
