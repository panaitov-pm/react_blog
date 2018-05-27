import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPost} from '../../AC';
import arrayToObject from '../../utils/arrayToObject';
import isEmpty from '../../utils/isEmpty';
import {generate as id} from 'shortid';

class Post extends Component {
	state = {
		post: {}
	};
	static getDerivedStateFromProps(props, state) {
		if (isEmpty(state.post)) {
			return {
				post: props.currentPost
			};
		}
		return state;
	};
	handleGetPostById = () => {
		const {match, posts} = this.props;
		let post = posts.filter(item => item.id === parseInt((match.params.id), 10));
		post = arrayToObject(post);
		this.setState({post: {...post[match.params.id]}});
	};
	componentDidMount() {
		const {getPost, match} = this.props;
		const {post} = this.state;
		(isEmpty(post))
			? getPost(match.params.id)
			: this.handleGetPostById();
	}

	render() {
		const {post} = this.state;
		const {comments} = this.props;
		return (
			<div className="post">
				<h1>{post.title}</h1>
				<p>{post.body}</p>
				<hr />
				<h2>Comments:</h2>
				<ul className="list-group">
					{
						comments.filter(comment => comment.postId === post.id)
						.map((comment) => (
							<li className="list-group-item" key={id()}>
								<h5 className="list-group-item__title">
									<span>{comment.name}</span>
									<small>
										<span>Posted by: </span>
										<a href={'mailto:' + comment.email}>{comment.email}</a>
									</small>
								</h5>
								<p>{comment.body}</p>
							</li>
						))
					}
				</ul>
			</div>
		);
	}
}

Post.propTypes = {
  comments: PropTypes.array,
  currentPost: PropTypes.object,
  getPost: PropTypes.func,
  match: PropTypes.object,
  posts: PropTypes.array
};

export default connect(
	({posts}) => ({
		posts      : posts.data,
		comments   : posts.comments,
		currentPost: posts.currentPost
	}),
	{getPost}
)(Post);

