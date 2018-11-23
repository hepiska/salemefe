import React from "react";
import { Wrapper } from 'atoms'
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react'
import SearchBar from 'molecules/searchBar'
import CmsListItem from 'molecules/cmsListItem'
import DressFrom from 'organisms/dressForm'



class AddDressPage extends React.Component {
  state = {
    searchKey: ''
  }
  onSubmit = (data) => {
    console.log(data)
  }

  render() {
    return (
      <DressFrom data={{ title: 'mantapgan' }} onSubmit={this.onSubmit} />
    )
  }
}


export default (AddDressPage)
