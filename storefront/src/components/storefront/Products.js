import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { getProducts } from '../../store/products.js'
import { connect } from 'react-redux';
import { switchCategoryTwo } from '../../store/categories.js';
import { addCart } from '../../store/cart.js'
import '../storefront/products.scss';

const Products = (props) => {
    return (
            <Grid container justify="center" spacing={5} className="product-interface">
                {props.products.productList.map((product, index) => {
                    if (product.category === props.activeCategory) {
                        return (
                            <Grid item key={index}>
                                <Card>
                                    <CardHeader title={product.name} />
                                    <CardContent>
                                        <Typography component="p">IMAGE</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <IconButton onClick={() => props.addCart(product)}>Add to cart</IconButton>
                                        <IconButton>View Details</IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    } else {
                        return null;
                    }
                })}
            </Grid>
    )
}


const mapStateToProps = state => {
    return { products: state.products, activeCategory: state.categories.activeCategory }
  }
  
  const mapDispatchToProps = {
    getProducts,
    switchCategoryTwo,
    addCart
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Products);