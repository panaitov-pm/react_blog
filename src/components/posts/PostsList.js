import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {List} from 'semantic-ui-react';
import Spinner from 'react-spinkit';
import {getPosts} from '../../AC';

import PostItem from './PostItem';

class PostsList extends Component {

	componentDidMount() {
		const {getPosts} = this.props;
		getPosts();
	}

	render() {
		const {posts, isLoading} = this.props;
		{if(isLoading) { return <Spinner name="folding-cube" color="coral" />}}
		return (
			<Fragment>
				<List celled>
					{
						posts.map(post => (
							<PostItem key={post.id}
								post={post} />
						))
					}
				</List>
			</Fragment>
		);
	}
}

PostsList.propTypes = {
	getPosts: PropTypes.func.isRequired,
	posts: PropTypes.array,
	isLoading: PropTypes.bool.isRequired,
};

export default connect(
	({posts}) => ({
		posts: posts.data,
		isLoading: posts.isLoading
	}),
	{getPosts}
)(PostsList);
