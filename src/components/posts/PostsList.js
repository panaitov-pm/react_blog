import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {List} from 'semantic-ui-react';
import {getPosts} from '../../AC';

import Post from './Post';

class PostsList extends Component {

	componentDidMount() {
		const {getPosts} = this.props;
		getPosts();
	}

	render() {
		const {posts, isLoading} = this.props;
		return (
			<div>
				<List celled>
					{
						posts.map(post => (
							<Post key={post.id}
								post={post} />
						))
					}
				</List>
			</div>
		);
	}
}

PostsList.propTypes = {};

export default connect(
	({posts}) => ({
		posts: posts.posts,
		isLoading: posts.isLoading
	}),
	{getPosts}
)(PostsList);
