import React from "react"
import { Wrapper, ImageWrapper, FontWrapper } from 'atoms'
import { getDressDetail } from 'services'
import styled from 'styled-components'
import { formatRupiah } from 'utils/helper'
import ImageModal from 'molecules/modal'

const FixedWrapper = styled(Wrapper)`
    left:0;
    top:0;
`
const MaxWidthWrapper = styled(Wrapper)`
    max-width: 768px;
    @media (max-width: 768px){
      max-width:100%
    }
`

class DetailPage extends React.Component {
  state = {
    searchKey: '',
    isLoading: true,
    isImageModalOpen: false,
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

  openImageModal = () => {
    this.setState({
      isImageModalOpen: true
    })
  }

  mainHeaderRender() {
    return (
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
        </MaxWidthWrapper>

      </FixedWrapper>
    )
  }



  render() {
    const { dress, isLoading, isImageModalOpen } = this.state
    return (
      <Wrapper width='100%' overflow="hidden">
        <this.mainHeaderRender />
        {dress && <ImageModal isOpen={isImageModalOpen} image={dress.image} onClose={() => this.setState({ isImageModalOpen: false })} />}

        {!isLoading ? (
          <Wrapper width='100%' maxWidth='480px' display='flex'>
            <Wrapper width='100%' align='center' onClick={this.openImageModal} cursor="pointer">
              <ImageWrapper src={dress.image} width='100%' maxWidth='480px' height='auto' />
            </Wrapper>
            <Wrapper width='100%' align='flex-start' padding='16px 0px'>
              <FontWrapper size='18px' margin='0px 0px 8px'>{dress.title}</FontWrapper>
              <FontWrapper size='16px' weight="600" margin='0px 0px 8px'>{formatRupiah(dress.price)}</FontWrapper>
              <Wrapper margin='0px 0px 8px' width='100%' align='flex-start'>
                <FontWrapper size='14px' margin='0px 0px 8px'>
                  Deskripsi
                </FontWrapper>
                <Wrapper width='100%' height='98px' align='flex-start' justify='flex-start' overflow='auto'>
                  <FontWrapper size='12px' margin='0px 0px 8px'>
                    {dress.desc}
                  </FontWrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        ) : null}
      </Wrapper>

    )
  }
}


export default (DetailPage)
