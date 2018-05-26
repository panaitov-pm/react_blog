import React, {Fragment, Component} from 'react';
import PostsList from '../posts/PostsList';
import SearchField from '../SearchField';

class Home extends Component {
	state = {
		filteredPost: ''
	};
	handleFilteredPosts = (post) => this.setState({filteredPost: post});
	render() {
		const {filteredPost} = this.state;
		return (
			<Fragment>
				<SearchField onFilteredPost={this.handleFilteredPosts} filteredPost={filteredPost}/>
				<PostsList filteredPost={filteredPost}/>
			</Fragment>
		);
	}
}

export default Home;
