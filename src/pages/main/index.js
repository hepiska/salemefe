import React from "react"
import {
  Switch,
  Route,
  BrowserRouter as Router,
  withRouter,
  //   Redirect,
} from "react-router-dom"
import { Wrapper, FontWrapper } from 'atoms'
import styled from 'styled-components'
import InviniteScroll from 'molecules/inviniteScroll'
import DressCard from 'molecules/dressCard'
import SortAndFilter from 'molecules/sortAndfilter'
import SearchBar from 'molecules/searchBar'

import { getAllDress, deleteDress } from 'services'

const MaxWidthWrapper = styled(Wrapper)`
    max-width: 480px;
    @media (max-width: 768px){
      max-width:100%
    }
`

const FixedWrapper = styled(Wrapper)`
    left:0;
    top:0;
`

class MainPages extends React.Component {
  state = {
    isLast: false,
    isFetching: false,
    searchKey: '',
    sort: 'id:desc',
    filter: 'all',
  }

  componentDidMount() {
    this.initialFetch()
  }

  chageSortFilter = (e, data) => {
    this.setState((state) => {
      state[data.name] = data.value
      delete state.dress
      return state
    }, () => {
      this.initialFetch()
    })

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

  tryFetch = (skip, limit) => {
    this.fetchData(skip, limit)
  }

  onitemClick = (id) => {
    this.props.history.push(`/${id}`)
  }

  mainHeaderRender = () => (
    <FixedWrapper
      width='100vw'
      direction='row'
      height='50px'
      background='white'
      z-index='10'
      position='fixed'
      shadow='0 1px 4px 0 rgba(0, 0, 0, 0.16)'
      align='star'
    >
      <MaxWidthWrapper width='100%' direction='row'>
        <Wrapper flex='1'>
          <FontWrapper size='20px'>
            Saleme
          </FontWrapper>
        </Wrapper>
        <Wrapper flex='1'>
          <SearchBar onChange={this.chageSortFilter} name='searchKey' />
        </Wrapper>
      </MaxWidthWrapper>

    </FixedWrapper>
  )

  render() {
    return (
      <Wrapper width='100%' overflow="hidden">
        <this.mainHeaderRender />
        {
          this.state.dresses && (
            <InviniteScroll
              padding='50px 0px 0px'
              fetchData={this.tryFetch}
              limit={5}
              isLast={this.state.isLast}
              isFetching={this.state.isFetching}
            >
              <MaxWidthWrapper margin='0px auto'>
                <SortAndFilter onChageFilter={this.chageSortFilter} onChangeSort={this.chageSortFilter} />
                {this.state.dresses.map(dress => (
                  <DressCard key={dress.id} {...dress} onClick={this.onitemClick} />
                ))}
                {this.state.dresses.length === 0 && <Wrapper>tidak ada barang untuk di tampilkan</Wrapper>}
              </MaxWidthWrapper>
            </InviniteScroll>
          )}


      </Wrapper>
    )

  }
}

export default (MainPages)
