import React,{Component} from 'react';
import {Text, Content} from 'native-base'
import {connect} from 'react-redux'

export class RestDetails extends Component{

    render(){
        return(
            <Content>
                <Text>{this.props.restaurant.name}</Text>
                <Text>Rating:{this.props.restaurant.rating}</Text>
                <Text>Phone:{this.props.restaurant.phone}</Text>
                <Text>price:{this.props.restaurant.price}</Text>
            </Content>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        restaurant: state.restaurant
    };
}
export default connect(mapStateToProps)(RestDetails);
