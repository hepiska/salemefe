import React from "react"
import { Wrapper } from 'atoms'
import { connect } from "react-redux"
import { Button, Loader, Dimmer } from 'semantic-ui-react'
import SearchBar from 'molecules/searchBar'
import CmsListItem from 'molecules/cmsListItem'
import { getAllDress, deleteDress } from 'services'


class DressPage extends React.Component {
  state = {
    searchKey: '',
    isLoading: false,
  }

  componentDidMount() {
    this._getAlldress()
  }

  _getAlldress = () => {
    getAllDress()
      .then(res => {
        this.setState({
          dresses: res.data
        })

      })
  }

  onSearchKeyChange = (event, data) => {
    this.setState({ searchKey: data.value })
  }

  onDeleteClick = (e, data) => {
    this.setState({
      isLoading: true,
    })
    deleteDress(data.id)
      .then(() => {
        const { dresses } = this.state
        const newDreses = dresses.filter(dress => dress.id !== data.id)
        this.setState({
          dresses: newDreses,
          isLoading: false,
        })
      })
      .catch(err => {
        this.setState({
          isLoading: false,
        })
      })

  }

  onEditClick = (e, data) => {
    this.props.history.push(`/cms/dress/${data.id}`)
  }

  render() {
    return (
      <Wrapper width='100%'>
        <SearchBar value={this.state.searchKey} onChange={this.onSearchKeyChange}>
          <Button content='add' onClick={() => this.props.history.push('/cms/dress/add')} color='green' icon='add square' labelPosition='left' />
        </SearchBar>
        <Wrapper width='100%'>
          {this.state.dresses ? this.state.dresses.map(dress => (
            <CmsListItem
              key={dress.id}
              id={dress.id}
              title={dress.title}
              desc={dress.desc}
              image={dress.image}
              price={dress.price}
              onDelete={this.onDeleteClick}
              onEdit={this.onEditClick}
              category={dress.category}
            />
          ))
            : <Loader />}

        </Wrapper>
        <Dimmer active={this.state.isLoading} page>
          <Loader />
        </Dimmer>
      </Wrapper>
    )
  }
}


export default (DressPage)
