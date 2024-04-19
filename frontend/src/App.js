import React from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Blog } from "./pages/blog/Blog"
import { Admin } from "./pages/admin/Admin"
import { AdminCreate } from "./pages/admin/AdminCreate"
import { Login } from "./pages/login/Login"
import { Regsiter } from "./pages/login/Regsiter"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"
import { Account } from "./pages/account/Account"
import { Create } from "./components/create/Create"

const App = () => {
  //after login
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin_add" component={AdminCreate} />
        <Route>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Regsiter} />
            <Route exact path="/post/:id" component={DetailsPages} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/create" component={Create} />
          </Switch>
          <Footer />
        </Route>
      </Switch>
    </Router>
    </>
  )
}
export default App
