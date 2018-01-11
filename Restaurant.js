import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from "./actions"
import { ListItem,
          Left,
          Right,
          Icon,
          Text,
          Body} from 'native-base';

export class Restaurant extends Component{
    render(){
        return (
             <ListItem key={this.props.restaurant.name} onPress={this.props.selectRestaurant}>
                <Left>
                <Text>{this.props.restaurant.name}</Text>
                </Left>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </ListItem>
        )
    };
};

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        selectRestaurant: () => dispatch(actions.selectRestaurant(ownProps.restaurant)),
    };
  };
export default connect(null,mapDispatchToProps)(Restaurant);
