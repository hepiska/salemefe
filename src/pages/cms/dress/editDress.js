import React from "react"
import { Wrapper } from 'atoms'
import { connect } from "react-redux"
import { Button, Loader, Dimmer } from 'semantic-ui-react'
import SearchBar from 'molecules/searchBar'
import CmsListItem from 'molecules/cmsListItem'
import DressFrom from 'organisms/dressForm'
import { editDress, getDressDetail } from 'services'


class EdirDressPage extends React.Component {
  state = {
    isLoading: false,
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this._getDressDetail(this.props.match.params.id)
    }
    else {
      this.props.history.goBack()
    }


  }

  _getDressDetail = (id) => {
    this.setState({
      isLoading: true,
    })
    getDressDetail(id)
      .then((res) => {
        this.setState({
          dress: res.data,
          isLoading: false,
        })
      })
  }

  onSubmit = (data) => {
    this.setState({
      isLoading: true,
    })
    editDress(this.props.match.params.id, data)
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
        {
          this.state.dress && <DressFrom onSubmit={this.onSubmit} data={this.state.dress} />
        }
        <Dimmer active={this.state.isLoading} page>
          <Loader />
        </Dimmer>
      </Wrapper>

    )
  }
}


export default (EdirDressPage)
