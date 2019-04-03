// downshift applies htmlFor for the label, but eslint doesn't recognize that
// also disabling the specific line causes some weirdness when running lint for syntax
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'

function Search() {
  return <div>hi</div>
}

export default Search
