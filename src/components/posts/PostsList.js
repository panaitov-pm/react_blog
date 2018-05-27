import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import {getPosts} from '../../AC';

import PostItem from './PostItem';
import './Posts.css';

class PostsList extends Component {

	componentDidMount() {
		const {getPosts} = this.props;
		getPosts();
	}

	render() {
		const {posts, isLoading, users, filteredPost, postViews, viewsSorting} = this.props;
		let postsWithViews = [];

		if (isLoading) {
			return <Spinner name="folding-cube" color="coral" />
		}

		postsWithViews = posts.map(post => {
			return {...post, postViews: (postViews[post.id] || 0), date: new Date()};
		});

		if (filteredPost.length > 0) {
			postsWithViews = postsWithViews.filter(item => {
				if (item.title.toLowerCase().includes(filteredPost.trim().toLowerCase())) {
					return item.title.toLowerCase().includes(filteredPost.trim().toLowerCase());
				} else {
					return item.body.toLowerCase().includes(filteredPost.trim().toLowerCase());
				}
			});
		}
		(viewsSorting === 'views_desc')
			? postsWithViews = postsWithViews.sort((a, b) => b.postViews - a.postViews)
			: postsWithViews = postsWithViews.sort((a, b) => a.postViews - b.postViews);
		return (
			<ul className="list-group">
				{
					postsWithViews.map(post => {
						return (
							<PostItem key={post.id}
							          post={post}
							          author={users[post.userId]} />
						)
					})
				}
			</ul>
		);
	}
}

PostsList.propTypes = {
	getPosts    : PropTypes.func.isRequired,
	posts       : PropTypes.array,
	postViews   : PropTypes.object,
	users       : PropTypes.object,
	isLoading   : PropTypes.bool.isRequired,
	filteredPost: PropTypes.string.isRequired,
	viewsSorting: PropTypes.string.isRequired,
};

export default connect(
	({posts, postViews}) => ({
		posts    : posts.data,
		isLoading: posts.isLoading,
		users    : posts.users.reduce((acc, item) => {
			acc[item.id] = item;
			return acc;
		}, {}),
		postViews

	}),
	{getPosts}
)(PostsList);
