import React from 'react'
import styled from 'styled-components'

const DropDownContent = styled.div`
  width: 100%;
  overflow-y: auto;
  text-align:center;
  margin: ${props => (props.margin ? props.margin : '0')};
  padding:  ${props => (props.padding ? props.padding : '0')};
  height:  ${props => (props.height ? props.height : '100vh')};
`


const defaultLimit = 10

class InviniteScroll extends React.Component {
  state = {
    isFetching: this.props.isFetching || false,
    skip: 0,
    isLast: this.props.itLast || false,
    lastSkip: 0,
    lastPos: 0,
  }

  static getDerivedStateFromProps(nexProps, prevState) {
    if (nexProps.isFetching !== prevState.isFetching && nexProps.isLast !== prevState.isLast) {
      return {
        isFetching: nexProps.isFetching,
        isLast: nexProps.isLast
      }
    }
    else if (nexProps.isFetching !== prevState.isFetching) {
      return {
        isFetching: nexProps.isFetching
      }
    } else if (nexProps.isLast !== prevState.isLast) {
      return {
        isLast: nexProps.isLast
      }
    }
    return null
  }

  _onScroll = event => {
    const currentPos = event.target.scrollTop
    const isScrollDown = currentPos - this.state.lastPos > 0
    if (isScrollDown) {
      // console.log(event.target.scrollTop / ((this.state.skip + 1) * event.target.scrollHeight), event.target.scrollHeight)
      if ((event.target.offsetHeight + event.target.scrollTop) / event.target.scrollHeight >= 0.95) {
        if (!this.state.isFetching && !this.state.isLast) {
          this.setState(
            state => {
              const newSkip = state.skip + 1
              if (newSkip > state.lastSkip) {
                state.skip = newSkip
                state.lastSkip = newSkip
              }
              return state
            },
            () => {
              if (this.state.isFetching) {
                return
              }
              const limit = this.props.limit || defaultLimit
              this.props.fetchData(this.state.skip, limit)
            }
          )
        }
      }
    }

    this.setState({
      lastPos: currentPos
    })
  }



  render() {
    const { margin, height, padding, children } = this.props

    return (
      <DropDownContent margin={margin} height={height} padding={padding} onScroll={this._onScroll}>
        {children}
      </DropDownContent>
    )
  }
}

export default InviniteScroll
