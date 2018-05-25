import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const PostItem = ( { post, comments, author } ) => {
	return (
		<li className="list-group-item">
			<div className="list-group__content">
				<h3 className="list-group__title"><NavLink to={`/post/${post.id}`}>{post.title}</NavLink></h3>
				<p>{post.body}</p>
				<div clasname="list-group__meta"><small><em><strong>Author:</strong> {author.name}</em></small></div>
			</div>
			<div className="list-group__count">
				<span className="badge badge-primary badge-pill">{comments}</span>
			</div>
		</li>
	);
};

PostItem.propTypes = {
	post: PropTypes.object.isRequired,
	comments: PropTypes.number,
};


export default PostItem;
