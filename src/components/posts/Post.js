import React, {Fragment} from 'react';
import {List} from 'semantic-ui-react';

const Post = ({post}) => {
	const {title, body} = post;
	return (
		<Fragment>
			<List.Item>
				<List.Content>
					<List.Header as='a'>{title}</List.Header>
					{body}
				</List.Content>
			</List.Item>
		</Fragment>
	);
};

export default Post;
