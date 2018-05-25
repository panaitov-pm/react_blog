import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import { getPosts } from '../../AC';

import PostItem from './PostItem';
import './Posts.css';

class PostsList extends Component {

	componentDidMount() {
		const { getPosts } = this.props;
		getPosts();
	}

	render() {
		const { posts, isLoading, comments, users } = this.props;

		if ( isLoading ) {
			return <Spinner name="folding-cube" color="coral" />
		}
		return (
			<ul className="list-group">
				{
					posts.map( post => {
						return (
							<PostItem key={post.id}
							          post={post}
							          comments={comments[post.id]}
							author={users[post.userId]}/>
						)
					} )
				}
			</ul>
		);
	}
}

PostsList.propTypes = {
	getPosts : PropTypes.func.isRequired,
	posts    : PropTypes.array,
	comments : PropTypes.object,
	users    : PropTypes.object,
	isLoading: PropTypes.bool.isRequired
};

export default connect(
	( { posts } ) => ({
		posts    : posts.data,
		isLoading: posts.isLoading,
		comments : posts.comments.reduce( ( acc, item ) => {
			acc[item.postId] = (acc[item.postId] || 0) + 1;
			return acc;
		}, {} ),
		users    : posts.users.reduce( ( acc, item ) => {
			acc[item.id] = item;
			return acc;
		}, {} )

	}),
	{ getPosts }
)( PostsList );
