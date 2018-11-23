import React from "react";
import { Wrapper } from 'atoms'
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react'
import SearchBar from 'molecules/searchBar'
import CmsListItem from 'molecules/cmsListItem'



class DressPage extends React.Component {
  state = {
    searchKey: ''
  }
  onSearchKeyChange = (event, data) => {
    this.setState({ searchKey: data.value })
  }

  render() {
    return (
      <Wrapper width='100%' >
        <SearchBar value={this.state.searchKey} onChange={this.onSearchKeyChange}>
          <Button content='add' color='green' icon='add square' labelPosition='left' />
        </SearchBar>
        <Wrapper width='100%'>
          <CmsListItem
            title="Dress mantap jaya"
            desc="laslkalskalkdlakdlakdlakdlakdlkaldkaldkaldkalkdalkdlakdalkdlakdlakdlakdlakd lakdlakdladlasasasasasasasasasasasasasasa"
            image='https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/a1838f47ff9e369b891ba8d5b2e1a164.jpg'
          />
        </Wrapper>
      </Wrapper>
    )
  }
}


export default (DressPage)
