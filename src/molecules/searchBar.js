import React from 'react'
import { Input } from 'semantic-ui-react'
import { Wrapper } from 'atoms'



const SearchBar = ({ value, onChange, children }) => {
  return (
    <Wrapper width='100%' padding='8px 0px' justify='space-between' direction="row">
      <Wrapper flex='5' align='start'>
        {children}
      </Wrapper>
      <Wrapper flex='2'>
        <Input
          icon='search'
          value={value}
          onChange={onChange}
          placeholder='Search...'
        />
      </Wrapper>

    </Wrapper>
  )
}

export default SearchBar