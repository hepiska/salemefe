import React from 'react'
import { Button } from 'semantic-ui-react'
import { Wrapper, ImageWrapper, FontWrapper } from 'atoms'
import { formatRupiah } from 'utils/helper'




const CmsListItem = ({ image, title, price, desc, onClick, id }) => (
  <Wrapper width='100%' maxWidth='480px' display='flex' onClick={() => onClick(id)} cursor="pointer">
    <Wrapper width='100%' align='center'>
      <ImageWrapper src={image} width='100%' maxWidth='480px' height='auto' />
    </Wrapper>
    <Wrapper width='100%' align='flex-start' padding='16px 0px'>
      <FontWrapper size='18px' margin='0px 0px 8px'>{title}</FontWrapper>
      <FontWrapper size='16px' weight="600">{formatRupiah(price)}</FontWrapper>
    </Wrapper>
  </Wrapper>
)

export default CmsListItem