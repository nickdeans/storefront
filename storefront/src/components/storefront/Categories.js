import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';

import { switchCategoryTwo } from '../../store/categories.js';

const CategorySelect = (props) => {
    return (
    <>
        <Typography variant="h2" component="h2">Products</Typography>
        <Button onClick={() => props.switchCategoryTwo('Electronics')}>Electronics</Button>
        <Button onClick={() => props.switchCategoryTwo('Food')}>Food</Button>
    </>
    )
}

const mapStateToProps = (state) => {
    return {
      categories: state.categories.categories
    }
  }

  const mapDispatchToProps = {
    switchCategoryTwo
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect);