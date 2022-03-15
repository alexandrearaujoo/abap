import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Homepage from "../pages/home";


const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Homepage />
      </Route>
    </Switch>
  )
}

export default Routes;