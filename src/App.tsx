import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./presentation/store/store";
import React, {  useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme, darkTheme } from "core/theme";
import { MainContainer } from "App.style";
import Navbar from "presentation/components/molecules/Navbar";
import AppConfiguration from "presentation/components/templates/AppConfiguration";

const HomeScreen = React.lazy(
  () => import("./presentation/screens/HomeScreen")
);
const TaskListScreen = React.lazy(
  () => import("./presentation/screens/TaskListScreen")
);
const CategoriesScreen = React.lazy(
  () => import("./presentation/screens/CategoriesScreen")
);

const NotFoundScreen = React.lazy(
  () => import("./presentation/screens/NotFoundScreen")
);

function App() {
  const [theme, setTheme] = useState<Theme>(darkTheme);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainContainer>
          <AppConfiguration>
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<CategoriesScreen />} />
              <Route path="/home" element={<CategoriesScreen />} />
              <Route path="/categories" element={<CategoriesScreen />} />
              <Route path="/tasks" element={<TaskListScreen />} />
              <Route path="*" element={<NotFoundScreen />} />
            </Routes>
          </BrowserRouter>
          </AppConfiguration>
        </MainContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
