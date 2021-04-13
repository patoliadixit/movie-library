import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import "./Search.css"
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField'
import { Button, ButtonBase, IconButton } from '@material-ui/core';
function Search(props) {
  const history = useHistory()
  const [searchField, setSearchField] = useState("");
  const onSubmitForm = (event) => {
    event.preventDefault()
    history.push(`/search/${searchField}`)
  }
  const onChangeSearchField = (event) => {
    setSearchField(event.target.value)
  }
  return (
    <div>
      <form onSubmit={onSubmitForm} action={`/search/${searchField}`}>
        <input
          className="search_box"
          value={searchField} onChange={onChangeSearchField}
          type="text" placeholder="Search.." />
        <button
          className="search_button"
          variant="contained"
          type="submit"
          size="small"
        ><i className="fa fa-search"></i></button>
      </form>
    </div>
  )
}

export default Search
