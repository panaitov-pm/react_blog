import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './SearchField.css';

class SearchField extends Component {

	handleSearchPost = ({target}) => {
		this.props.onFilteredPost(target.value);
	};
	handleSubmit = (e) => {
		e.preventDefault();
	};
	render() {
		return (
			<div className="search-form">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="search">Search</label>
						<input type="text" className="form-control"
						       aria-describedby="searchHelp" id="search"
						       value={this.props.filteredPost}
						       onChange={this.handleSearchPost} />
					</div>
				</form>
			</div>
		);
	}
}

SearchField.propTypes = {
	filteredPost: PropTypes.string.isRequired,
	onFilteredPost: PropTypes.func.isRequired
};

export default SearchField;
