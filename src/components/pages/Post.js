import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import arrayToObject from '../../utils/arrayToObject';

class Post extends Component {
	state = {
		post: {}
	};

	handleGetPostById = () => {
		const {match, posts} = this.props;
		let post = posts.filter(item => item.id === parseInt((match.params.id), 10));
		post = arrayToObject(post);
		this.setState({post: {...post[match.params.id]}});
	};

	componentDidMount() {
		this.handleGetPostById();
	}


	render() {
		const {post} = this.state;
		return (
			<div className="post">
				<h1>{post.title}</h1>
				<p>{post.body}</p>
			</div>
		);
	}
}

Post.propTypes = {
	match: PropTypes.object,
	posts: PropTypes.array,
};

export default connect(
	({posts}) => ({
		posts: posts.data
	}),
	null
)(Post);

