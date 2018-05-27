import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SortField extends Component {
	handleViewsSorting = ({target}) => {
		const {onViewsSorting} = this.props;
		onViewsSorting(target.value);
	};
	render() {
		const {viewsSort} = this.props;
		return (
			<div className="sort-field">
				<form>
					<div className="form-group">
						<label htmlFor="sortingSelect">Sort</label>
						<select defaultValue={viewsSort} className="form-control"
						        id="sortingSelect" onChange={this.handleViewsSorting}>
							<option value="views_desc">Popularity &#8595;</option>
							<option value='views_asc'>Popularity &#8593;</option>
						</select>
					</div>
				</form>
			</div>
		);
	}
}

SortField.propTypes = {
  onViewsSorting: PropTypes.func.isRequired,
  viewsSort: PropTypes.string
};

export default SortField;
