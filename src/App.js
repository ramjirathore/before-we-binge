import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Canvas from "./containers/Canvas";
import Movie from "./containers/Movies/Movie/Movie";

import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={ Canvas } />
				<Route path="/movie/:id" component={ Movie } />
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
