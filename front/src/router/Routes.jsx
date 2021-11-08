import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "../components/common/Layout";

const Home = lazy(() => import("../pages/Home"));
const ProductDetail = lazy(() => import("../components/ProductDetail"));
const CheckoutCart = lazy(() => import("../pages/CheckoutCart"));
const Error = lazy(() => import("../pages/Error"));

const Routes = () => (
  <Suspense fallback={<h2>Loading Ecommerce...</h2>}>
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products/:id" exact component={ProductDetail} />
          <Route path="/checkout" exact component={CheckoutCart} />
          <Route path="*" exact component={Error} />
        </Switch>
      </Layout>
    </Router>
  </Suspense>
);

export default Routes;
