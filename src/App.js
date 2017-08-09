import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import More from './More';
import Footer from './Footer';
import 'normalize.css';
import 'flexboxgrid2/dist/flexboxgrid.css';
import './css/style.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<div className="container">
					<Content />
					<More />
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
