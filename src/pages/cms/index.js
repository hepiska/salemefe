import React from "react"
import {
  Switch,
  Route,
  BrowserRouter as Router,
  withRouter,
  //   Redirect,
} from "react-router-dom"
import { Wrapper, FontWrapper } from 'atoms'
import { Grid, Menu, } from 'semantic-ui-react'
import { connect } from "react-redux"
import WelcommeCmsPage from './wellcome'
import DressPage from './dress'
import AddDressPage from './dress/addDress'
import EditDressPage from './dress/editDress'

class MainPages extends React.Component {
  CmsHeaderRender() {
    return (
      <Wrapper
        width='100%'
        direction='row'
        height='50px'
        background='white'
        shadow='0 1px 4px 0 rgba(0, 0, 0, 0.16)'
        align='star'
      >
        <Wrapper flex='1'>
          <FontWrapper size='20px'>
            Saleme
          </FontWrapper>
        </Wrapper>
        <Wrapper flex='3'>
          <FontWrapper size='20px'>
            Cms
          </FontWrapper>
        </Wrapper>
      </Wrapper>
    )
  }

  render() {
    return (
      <Wrapper width='100%' padding='0px 40px'>
        {this.CmsHeaderRender()}
        <Grid style={{ width: "100%" }}>
          <Grid.Column width={4}>
            <Menu secondary vertical size="small">
              <Menu.Item
                name="Management Dress"
                active={this.props.history.location.pathname === "/cms/dress"}
                onClick={() => this.props.history.push("/cms/dress")}
              />
              <Menu.Item
                name="Back to Main"
                onClick={() => this.props.history.push("/")}
              />
            </Menu>
          </Grid.Column>
          <Grid.Column width={12}>
            <Switch>
              <Route path="/cms/dress/add" component={AddDressPage} />
              <Route path="/cms/dress/:id" component={EditDressPage} />
              <Route path="/cms/dress" component={DressPage} />
              <Route path="/cms" component={WelcommeCmsPage} />
            </Switch>
          </Grid.Column>
        </Grid>
      </Wrapper>
    )
  }
}


export default (MainPages)
