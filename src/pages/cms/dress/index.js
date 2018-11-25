import React from "react"
import { Wrapper } from 'atoms'
import { Button, Loader, Dimmer } from 'semantic-ui-react'
import SearchBar from 'molecules/searchBar'
import CmsListItem from 'molecules/cmsListItem'
import InviniteScroll from 'molecules/inviniteScroll'
import { getAllDress, deleteDress } from 'services'


class DressPage extends React.Component {
  state = {
    searchKey: '',
    isLoading: false,
    sort: 'id:desc',
    filter: 'all',
  }

  componentDidMount() {
    this.initialFetch()
  }

  fetchData = (skip, limit) => {
    this.setState((state) => {
      state.isFetching = true
      return state
    })
    getAllDress(skip, '', this.state.sort, this.state.filter, limit)
      .then(res => {
        this.setState({
          isFetching: false,
          isLast: res.data.length === 0
        })
        this.setState((state) => {
          state.dresses = state.dresses ? [...state.dresses, ...res.data] : res.data
          return state
        })

      })
  }

  tryFetch = (skip, limit) => {
    this.fetchData(skip, limit)
  }

  initialFetch = () => {
    this.setState((state) => {
      state.isFetching = true
      return state
    })
    getAllDress(0, this.state.searchKey, this.state.sort, this.state.filter, 5)
      .then(res => {
        this.setState({
          isFetching: false,
          isLast: res.data.length === 0
        })
        this.setState((state) => {
          state.dresses = res.data
          return state
        })

      })
  }


  onSearchKeyChange = (event, data) => {
    this.setState({ searchKey: data.value },() => {
      this.initialFetch()
    })
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
        <InviniteScroll
          padding='50px 0px 0px'
          fetchData={this.tryFetch}
          limit={5}
          height='85vh'
          isLast={this.state.isLast}
          isFetching={this.state.isFetching}
        >
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
        </InviniteScroll>
        <Dimmer active={this.state.isLoading} page>
          <Loader />
        </Dimmer>
      </Wrapper>
    )
  }
}


export default (DressPage)
