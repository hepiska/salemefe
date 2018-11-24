import React from "react"
import { Wrapper, ImageWrapper, FontWrapper } from 'atoms'
import { connect } from "react-redux"
import { Button, Form, Message, Input } from 'semantic-ui-react'
import DropZone from 'react-dropzone'
import { matchTrue } from 'utils/helper'
import { upload } from 'services'


const defaultData = {
  title: '',
  image: '',
  desc: '',
  price: '',
  category: 'midi dress'
}

const dressOptions = [{ key: 'm', text: 'mini dress', value: 'mini dress' },
{ key: 'f', text: 'midi dress', value: 'midi dress' },
{ key: 'h', text: 'long dress', value: 'long dress' }
]

class DressForm extends React.Component {
  state = {
    input: { ...defaultData, ...this.props.data },
    validation: {
      image: true,
      title: true,
      desc: true,
      price: true,
      category: true,
    },
    validationParams: {
      image: /(\w{1,})/,
      title: /(\w{5,100})/,
      desc: /(\w{1,})/,
      price: /(\w{3,})/,
      category: /(\w{3,})/,
    },
    response: {
      title: '',
      isModalOpen: false,
      message: 'sasasasa',
    },
  }

  handleChange = ({ target }) => {
    this.setState((state) => {
      state.input[target.name] = target.value
      state.validation[target.name] = state.validationParams[target.name].test(target.value)
      return state
    })
  }

  onSubmit = () => {
    const newValidation = {
    }
    Object.keys(this.state.validationParams).forEach((key) => {
      newValidation[key] = this.state.input[key] ?
        this.state.validationParams[key].test(this.state.input[key]) : false
    })

    this.setState({
      validation: newValidation,
    }, () => {
      if (matchTrue(this.state.validation)) {
        this.props.onSubmit(this.state.input)
      }
    })
  }

  onUpload = files => {
    const file = files[0]
    const formData = new FormData()
    formData.set("files", file, file.name)
    upload(formData).then(res => {
      const data = res.data[0]
      this.setState(state => {
        const { input } = state
        input.image = data.url
        state.input = input
        return state
      })
    })
  };

  render() {
    const { input, validation } = this.state
    return (
      <Wrapper width='100%' padding='16px'>
        <Wrapper width='100%'>
          <Wrapper width='100%' direction='row' justify='flex-start'>
            <ImageWrapper src={input.image} width='512px' height='512px' />
            <Wrapper flex='1' padding='0px 16px'>
              <DropZone style={{ position: 'relative', width: '100%' }} onDrop={this.onUpload}>
                <Wrapper width='100%' shadow='0 1px 4px 0 rgba(0, 0, 0, 0.16)' height='512px'>
                  <FontWrapper size='22px'>Upload</FontWrapper>
                </Wrapper>
              </DropZone>
            </Wrapper>
          </Wrapper>
          <Wrapper width='100%' padding='16px 16px 16px 0'>
            <Form style={{ width: "100%" }} onSubmit={this.onSubmit} error={!validation.image}>
              <Form.Field error={!validation.title}>
                <label>Title</label>
                <input placeholder='Title' value={input.title} name='title' onChange={this.handleChange} />
              </Form.Field>
              <Form.Field error={!validation.price}>
                <label>Price</label>
                <input placeholder='Prize' value={input.price} name='price' onChange={this.handleChange} />
              </Form.Field>
              <Form.Select fluid label='Category' options={dressOptions} name='category' placeholder='Gender' />
              <Form.Field error={!validation.image}>
                <label>Image Url</label>
                <input placeholder='Image url' value={input.image} name='image' onChange={this.handleChange} />
              </Form.Field>
              <Form.TextArea error={!validation.desc} label='Description' placeholder='Description' value={input.desc} name='desc' onChange={this.handleChange} />
              <Button type='submit' fluid>Submit</Button>
            </Form>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    )
  }
}


export default (DressForm)
