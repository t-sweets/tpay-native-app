import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";
import SampleB from "./pages/SampleB";
import Home from "./pages/Home";
import Icon from "react-native-vector-icons/FontAwesome";
import PaymentDetail from "./pages/PaymentDetail";

import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "app/modules";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";

const STORYBOOK_START = false;
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
                key="tabbar"
                tabs
                showLabel={false}
                activeTintColor="#04a3e4"
              >
                <Scene
                  key="home"
                  iconName="home"
                  icon={HomeIcon}
                  hideNavBar
                  initial
                  component={Home}
                />
                <Scene key="sampleB" hideNavBar component={SampleB} />
              </Scene>
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

const HomeIcon = (props: { focused: boolean; iconName: string }) => {
  return (
    <Icon
      style={{
        color: props.focused ? "#04a3e4" : "#999",
        lineHeight: 55
      }}
      name={props.iconName || "circle"}
      size={28}
    />
  );
};

export default STORYBOOK_START ? require("./storybook").default : App;
