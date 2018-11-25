import React from 'react'
import { Wrapper, FontWrapper } from 'atoms'
import { Dropdown, Button } from 'semantic-ui-react'
import FullScreenFilter from 'molecules/fullScreenFilter'

const sortOption = [
  { key: 'price_desc', value: 'price:desc', text: 'Termahal' },
  { key: 'price_asc', value: 'price:asc', text: 'Termurah' },
  { key: 'terbaru', value: 'id:desc', text: 'Terbaru' }
]
const dressOptions = [
  { key: 'a', text: 'semua', value: 'all' },
  { key: 'm', text: 'mini dress', value: 'mini dress' },
  { key: 'f', text: 'midi dress', value: 'midi dress' },
  { key: 'h', text: 'long dress', value: 'long dress' }
]

class SortAndFilter extends React.Component {
  state = {
    isFilterOpen: false
  }

  onCloseFilter = () => {
    this.setState(
      {
        isFilterOpen: false
      }
    )
  }

  onOpenFilter = () => {
    this.setState(
      {
        isFilterOpen: true
      }
    )
  }

  render() {
    const { onChageFilter, onChangeSort, } = this.props
    return (
      <Wrapper width='100%' background='white' padding='16px 0px' direction='row'>
        <FullScreenFilter isOpen={this.state.isFilterOpen} onClose={this.onCloseFilter} title='filter'>
          <Wrapper align='center'>
            <FontWrapper size="14px" margin='0px 0px 10px'>
              Category
            </FontWrapper>
            <Dropdown placeholder='filter' size='tiny' name='filter' onChange={onChageFilter} selection options={dressOptions} />
          </Wrapper>
        </FullScreenFilter>
        <Wrapper flex='1' align='start'>
          <Dropdown placeholder='urutkan' name='sort' onChange={onChangeSort} fluid selection options={sortOption} />
        </Wrapper>
        <Wrapper flex='1'>
          <Button content='filter' onClick={this.onOpenFilter} />
        </Wrapper>
      </Wrapper>
    )
  }
}


export default SortAndFilter