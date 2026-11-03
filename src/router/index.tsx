import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WhatsAppButton from "../common/WhatsAppButton";
import PageFrame from "../common/PageFrame";
import RevealObserver, { RevealStyles } from "../common/Reveal";
import routes from "./config";
import { Styles } from "../styles/styles";

// Created once: building lazy components during render would remount the page on every re-render.
const pages = routes.map((routeItem) => ({
  ...routeItem,
  Component: lazy(() => import(`../pages/${routeItem.component}`)),
}));

const pageIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 12px, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const PageTransition = styled("main")`
  animation: ${pageIn} 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
`;

const Router = () => {
  const location = useLocation<{ scrollTo?: string } | undefined>();

  // New page starts at the top, unless Home was asked to scroll to a section.
  useEffect(() => {
    if (!location.state?.scrollTo) window.scrollTo(0, 0);
  }, [location.pathname, location.state]);

  return (
    <Suspense fallback={null}>
      <Styles />
      <RevealStyles />
      <RevealObserver />
      <PageFrame>
        <Header />
        <PageTransition key={location.pathname}>
          <Switch location={location}>
            {pages.map(({ component, path, exact, Component }) => (
              <Route key={component} path={path} exact={exact} component={Component} />
            ))}
          </Switch>
        </PageTransition>
        <Footer />
      </PageFrame>
      <WhatsAppButton />
    </Suspense>
  );
};

export default Router;
