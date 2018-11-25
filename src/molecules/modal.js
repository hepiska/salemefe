import React from 'react'
import { Modal } from 'semantic-ui-react'
import { ImageWrapper, } from 'atoms'

const ImageModal = ({ isOpen, image, onClose }) => (
  <Modal open={isOpen} basic size='large' onClose={onClose}>
    <Modal.Content>
      <ImageWrapper src={image} width='100%' height='auto' />
    </Modal.Content>
  </Modal>
)

export default ImageModal