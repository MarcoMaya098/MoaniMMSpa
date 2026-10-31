import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WhatsAppButton from "../common/WhatsAppButton";
import PageFrame from "../common/PageFrame";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <PageFrame>
        <Header />
        <Switch>
          {routes.map((routeItem) => {
            return (
              <Route
                key={routeItem.component}
                path={routeItem.path}
                exact={routeItem.exact}
                component={lazy(() => import(`../pages/${routeItem.component}`))}
              />
            );
          })}
        </Switch>
        <Footer />
      </PageFrame>
      <WhatsAppButton />
    </Suspense>
  );
};

export default Router;
