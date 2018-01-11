
import React, { Component } from 'react';
import { connect } from "react-redux";
import Restaurant from './Restaurant';
import RestDetails from './RestDetails';
import * as actions from "./actions";
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Footer,
    FooterTab,
    Spinner} from 'native-base';

export class Main extends Component {
  renderBtn(){
    if(this.props.isFetching) {
      return <Spinner color='green' />
  }
    else{
    return(
    <Button full onPress={this.props.fetchAddress} >
      <Text>Look for restaurants around you</Text>
    </Button>)
    }
  }
  renderAllRestaurants() {
    let count = 0;
    if(!this.props.businesses) return;
    else if(this.props.showDetail!=true){
        return this.props.businesses.map((item) => {
        return <Restaurant key={count++} restaurant = {item} />
        })
    }
  };
  render() {
    if(this.props.showDetail){
      return(
          <Container>
              <Header><Text>Restaurants</Text></Header>
              <Content>
              <Button full>
              <Left ><Icon name='arrow-back' onPress = {this.props.BackToList}/></Left>
              </Button>
              <RestDetails />
              </Content>
          </Container>
      );
    } else {
      return(
          <Container>
              <Header><Text>Restaurants</Text></Header>
              <Content>
              {this.renderBtn()}{this.renderAllRestaurants()}
              </Content>
          </Container>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
      businesses: state.businesses,
      isFetching: state.isFetching,
      showDetail: state.showDetail,
      restaurant: state.restaurant,
  };
};
const mapDispatchToProps = (dispatch,ownPros) => {
  return {
      fetchAddress: ()=> {dispatch(actions.getLocation())},
      BackToList: ()=> dispatch(actions.goBack())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
