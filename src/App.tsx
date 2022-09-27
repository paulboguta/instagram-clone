import { GlobalStyle, theme } from "./styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./store/store";
import { SignupPage } from "./pages/Signup";
import { SetupPage } from "./pages/SetupPage/SetupPage";
import { AuthRoute } from "./features/auth/AuthRoute";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <AuthRoute>
  <Feed /> 
</AuthRoute> */}
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/setup"
          element={
            // <AuthRoute>
            <SetupPage />
            // </AuthRoute>
          }
        />
        <Route
          path="/profilepage" // to change /user/:uid
          element={
            // <AuthRoute>
            <ProfilePage />
            // </AuthRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  );
};

export default AppWrapper;
