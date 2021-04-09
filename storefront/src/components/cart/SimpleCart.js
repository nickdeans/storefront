import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { deleteCart } from '../../store/cart.js';
import {connect} from 'react-redux';

const SimpleCart = (props) => {
  if(props.cart.cart.length !== null){
    return(
        <Card>
            <CardContent>
              {props.cart.cart.map((product, idx) => {
                return (
                  <Typography key={idx}>
                    ${product.price}: {product.name}
                    <Button onClick={() => props.deleteCart(product)}>x</Button>
                  </Typography>
                )
              })}
            </CardContent>

        </Card>
    )
  } else {
    return(
      <>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = {
  deleteCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);