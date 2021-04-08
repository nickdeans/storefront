import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../storefront/categories.scss';

import { connect } from 'react-redux';

import { switchCategoryTwo } from '../../store/categories.js';
import { Grid } from '@material-ui/core';

const CategorySelect = (props) => {
    return (
    <>  
        <Grid className="category-parent">
            <Typography variant="h4" component="h3" className="categories">Browse Our Categories</Typography>
                <div class="category-button">
                    <Button onClick={() => props.switchCategoryTwo('Electronics')} id="category-button" color="primary">Electronics</Button>
                    <p>|</p>
                    <Button onClick={() => props.switchCategoryTwo('Food')} id="category-button" color="primary">Food</Button>
                </div>
                <h1>{props.activeCategory}</h1>
        </Grid>
    </>
    )
}

const mapStateToProps = (state) => {
    return {
      categories: state.categories.categories,
      activeCategory: state.categories.activeCategory,
    }
  }

  const mapDispatchToProps = {
    switchCategoryTwo
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect);