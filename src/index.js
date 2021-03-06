import React from "react"
import ReactDOM from "react-dom"
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom"
import "./index.css"
import App from "./App"
import Cart from "./pages/cart"
import LinkPage from "./pages/link"
import NotFound from "./pages/404"
import Toko from "./pages/toko"
import Login from "./pages/login"
import itemDetail from "./pages/itemDetail"
import * as serviceWorker from "./serviceWorker"

const routing = (
	<Router>
		<Switch>
			<Route exact path='/' component={App} />
			<Route path='/cart' component={Cart} />
			<Route path='/link' component={LinkPage} />
			<Route path='/toko' component={Toko} />
			<Route path='/login' component={Login} />
			<Route path='/itemDetail' component={itemDetail} />
			<Route component={NotFound} />
		</Switch>
	</Router>
)
ReactDOM.render(routing, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
