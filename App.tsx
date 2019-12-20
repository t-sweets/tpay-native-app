import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";

import { rootReducer } from "app/modules";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Icon from "react-native-vector-icons/FontAwesome";
import PaymentDetail from "./pages/PaymentDetail";

import { default as HomeIcon } from "app/components/icons/Home";
import { default as PeopleIcon } from "app/components/icons/People";

const STORYBOOK_START = true;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const RouterWithRedux = connect()(Router);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <RouterWithRedux>
        <Stack key="inner">
          <Scene key="root" hideNavBar initial>
            <Scene
              key="tabbar"
              tabs
              showLabel={false}
              activeTintColor="#04a3e4"
            >
              <Scene
                key="home"
                size={28}
                icon={HomeIcon}
                hideNavBar
                initial
                component={Home}
              />
              <Scene
                key="account"
                size={28}
                icon={PeopleIcon}
                hideNavBar
                component={Account}
              />
            </Scene>
          </Scene>
          <Scene
            key="paymentDetail"
            path={"/payment/detail/:uuid/"}
            component={PaymentDetail}
            back
          />
        </Stack>
      </RouterWithRedux>
    </Provider>
  );
}

export default STORYBOOK_START ? require("./storybook").default : App;
