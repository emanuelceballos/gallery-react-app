import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <br />
            <input type="text" className="w-75 m-2" name="search" id="search" />
            <button type="submit" className="btn btn-primary">
                <i className="fas fa-search">Search</i>
            </button>
        </form>
    )
}

SearchForm.propTypes = {
    handleSubmit: PropTypes.func
}

export default SearchForm
