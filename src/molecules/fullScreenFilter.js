import React from 'react'
import ReactDOM from 'react-dom'
// import { Modal } from 'semantic-ui-react'
import styled from 'styled-components'
import { Wrapper } from 'atoms'
import { Icon } from 'semantic-ui-react'



const Modal = styled.div`
    display: ${props => (props.isOpen ? 'block' : 'none')}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 10001; /* Sit on top */
    left: 0;
    top: 0;
    width: 100vw; /* Full width */
    height: 100vh; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.5); /* Black w/ opacity */
`

const FilterWrapper = styled(Wrapper)`
    max-width: 256px;
    width: 50%;
    height: 100vh;
    position:fixed;
    right:0;
    top:0;
`



const element = document.getElementById('modal')

const BasicModal = ({
  isOpen = false, children, onClose, title
}) => (
    ReactDOM.createPortal(
      <Modal isOpen={isOpen}>
        <FilterWrapper height='100vh' width='50%' background='white' justify='start'>
          <Wrapper direction='row' width='100%' justify='space-between' padding='16px'>
            {title}
            <Icon name='close' onClick={onClose} />
          </Wrapper>
          {children}
        </FilterWrapper>
      </Modal>
      , element,
    )

  )

export default BasicModal
