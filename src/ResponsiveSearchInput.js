import {TextInput} from '@primer/components'
import React, {useState} from 'react'
import SearchInput from './SearchInput'


const ResponsiveSearchInput = (props) => {
  const [open, setOpen] = useState(false)
  const handleClick = () => setOpen(!open)
  return (
    <div>
      <button onClick={handleClick}>
        hi
      </button>
      {open &&
        <SearchInput {...props}/>}
    </div>
  )
}


export default ResponsiveSearchInput
