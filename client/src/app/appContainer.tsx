import { Provider } from "react-redux";

import MainLayout from "../pages/mainLayout";
import Home from "../pages/home";

import store from "../shared/api/store";

const AppContainer = () => {
  return (
    <Provider store={store}>
      <MainLayout>
        <Home />
      </MainLayout>
    </Provider>
  );
};

export default AppContainer;
