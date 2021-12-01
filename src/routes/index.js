import { Switch, Route } from "react-router";
import { HomePage } from "../pages/home";
import { CardPage } from "../pages/cart";
export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/cart">
        <CardPage />
      </Route>
    </Switch>
  );
};
