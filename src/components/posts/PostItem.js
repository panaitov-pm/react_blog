import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {setPostView} from '../../AC';

import './Posts.css';

const PostItem = ({post, author, setPostView}) => {
	return (
		<li className="list-group-item">
			<div className="list-group__content">
				<h3 className="list-group__title" onClick={() => setPostView(post.id)}>
					<NavLink to={`/post/${post.id}`}>{post.title}</NavLink></h3>
				<p>{post.body}</p>
				<div className="list-group__meta">
					<small>
						<em>
							<strong>Author:</strong> {author.name}
						</em>
					</small>
					<small>Views: {post.postViews}</small>
				</div>
			</div>
		</li>
	);
};

PostItem.propTypes = {
  author: PropTypes.string,
  post: PropTypes.object.isRequired,
  setPostView: PropTypes.func
};

export default connect(
	null,
	{setPostView}
)(PostItem);
