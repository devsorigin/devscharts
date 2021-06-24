import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

const BreadcrumbItem = ({ name }) => {
	return <li>{name}</li>;
};

class Breadcrumb extends Component {
	state = {
		path: []
	};

	componentDidMount() {
		this.setState({
			path: this.props.location.pathname.split('/')
		});
	}

	render() {
		this.props.history.listen((location) => {
			this.setState({
				path: location.pathname.split('/')
			});
		});

		const routes = this.state.path.filter((item) => item !== '');

		return (
			<div className="breadcrumb">
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					{routes.length > 0 ? routes.map((route, index) => <BreadcrumbItem key={index} name={route} />) : ''}
				</ul>
			</div>
		);
	}
}

export default withRouter(Breadcrumb);
