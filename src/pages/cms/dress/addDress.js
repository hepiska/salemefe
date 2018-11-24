import React from "react"
import { Wrapper } from 'atoms'
import { connect } from "react-redux"
import { Button, Loader, Dimmer } from 'semantic-ui-react'
import SearchBar from 'molecules/searchBar'
import CmsListItem from 'molecules/cmsListItem'
import DressFrom from 'organisms/dressForm'
import { createDress } from 'services'


class AddDressPage extends React.Component {
  state = {
    searchKey: '',
    isLoading: false,
  }

  onSubmit = (data) => {
    this.setState({
      isLoading: true,
    })
    createDress(data)
      .then(res => {
        this.setState({
          isLoading: false,
        })
        this.props.history.push('/cms/dress')
      })
      .catch(err => {
        this.setState({
          isLoading: false,
        })
      })

  }

  render() {
    return (
      <Wrapper width='100%'>
        <DressFrom onSubmit={this.onSubmit} />
        <Dimmer active={this.state.isLoading} page>
          <Loader />
        </Dimmer>
      </Wrapper>

    )
  }
}


export default (AddDressPage)
