// downshift applies htmlFor for the label, but eslint doesn't recognize that
// also disabling the specific line causes some weirdness when running lint for syntax
/* eslint-disable jsx-a11y/label-has-for */
import React, {useState} from 'react'
import Router from 'next/router'
import lunr from 'lunr'
import {Relative, Box, Text} from '@primer/components'
import SearchItem from './SearchItem'
import Downshift from 'downshift'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import ResponsiveSearchInput from './ResponsiveSearchInput'


function Search({subfolder, documents}) {
  return (
    <div>
      hi
    </div>
  )
}

export default Search
