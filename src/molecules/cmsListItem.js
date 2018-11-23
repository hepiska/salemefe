import React from 'react'
import { Button } from 'semantic-ui-react'
import { Wrapper, ImageWrapper, FontWrapper } from 'atoms'
import { formatRupiah } from 'utils/helper'



const CmsListItem = ({ image, title, price, desc, onEdit, onDelete }) => {
  return (
    <Wrapper width='100%' padding='16px 16px' align='flex-start' direction='row' shadow='0 1px 4px 0 rgba(0, 0, 0, 0.16)'>
      <Wrapper flex='2' align='flex-start' >
        <ImageWrapper src={image} width='256px' height='256px' />
      </Wrapper>
      <Wrapper flex='4' align='flex-start' padding='8px'>
        <FontWrapper size='24px' margin='0px 0px 8px'>
          {title}
        </FontWrapper>
        <FontWrapper size='14px' margin='0px 0px 8px'>
          Harga : <b> {formatRupiah(price)}</b>
        </FontWrapper>
        <Wrapper margin='0px 0px 8px' width='100%' align='flex-start'>
          <FontWrapper size='14px' margin='0px 0px 8px'>
            Deskripsi
          </FontWrapper>
          <Wrapper width='100%' height='98px' align='flex-start' justify='flex-start' overflow='auto'>
            <FontWrapper size='12px' margin='0px 0px 8px'>
              {desc}
            </FontWrapper>
          </Wrapper>
        </Wrapper>
        <Wrapper justify='center' height='100%' direction='row' align='center'>
          <Button color='yellow' onClick={onEdit} icon="pencil alternate" labelPosition='left' content="Edit" style={{ marginRight: "24px" }} />
          <Button color='red' onClick={onDelete} icon='trash' labelPosition='left' content="Delete" />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export default CmsListItem