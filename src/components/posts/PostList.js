import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

class PostList extends Component {
	render() {
		return (
			<div>
				<Post />
			</div>
		);
	}
}

PostList.propTypes = {};

export default PostList;
