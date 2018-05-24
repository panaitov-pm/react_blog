import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';

import {getPost} from '../../AC';
import {List} from 'semantic-ui-react';

class Post extends Component {

	handleGetPost = (id) => {
		const {posts, getPost} = this.props;
		let post = posts.filter(item => item.id === id);
		getPost(post);
	};
	render() {
		const {title, body, id} = this.props.post;
		return (
			<Fragment>
				<List.Item>
					<List.Content>
						<List.Header>
							<a href="#" onClick={() => this.handleGetPost(id)}>{title}</a>
						</List.Header>
						{body}
					</List.Content>
				</List.Item>
			</Fragment>
		);
	}
};


export default connect(
	({posts}) => ({
		posts: posts.posts
	}),
	{getPost}
)(Post);
