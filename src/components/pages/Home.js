import React, {Fragment, Component} from 'react';
import ErrorBoundary from '../../ErrorBoundary';
import PostsList from '../posts/PostsList';
import SearchField from '../SearchField';
import SortField from '../SortField';

class Home extends Component {
	state = {
		filteredPost: '',
		viewsSort: 'views_desc',
	};
	handleFilteredPosts = (post) => this.setState({filteredPost: post});
	handleViewsSort = (sort) => this.setState({viewsSort: sort});

	render() {
		const {filteredPost, viewsSort} = this.state;
		return (
			<Fragment>
				<div className="posts-header">
					<div className="posts-header__item">
						<SearchField onFilteredPost={this.handleFilteredPosts} filteredPost={filteredPost} />
					</div>
					<div className="posts-header__item">
						<SortField onViewsSorting={this.handleViewsSort} viewsSorting={viewsSort}/>
					</div>
				</div>
				<ErrorBoundary>
					<PostsList filteredPost={filteredPost}  viewsSorting={viewsSort}/>
				</ErrorBoundary>
			</Fragment>
		);
	}
}

export default Home;
