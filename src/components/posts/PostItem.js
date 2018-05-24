import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import {List} from 'semantic-ui-react';

const PostItem = ({post}) => {
	return (
		<Fragment>
			<List.Item>
				<List.Content>
					<List.Header>
						<NavLink to={`/post/${post.id}`}>{post.title}</NavLink>
					</List.Header>
					{post.body}
				</List.Content>
			</List.Item>
		</Fragment>
	);
};

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
};



export default PostItem;
