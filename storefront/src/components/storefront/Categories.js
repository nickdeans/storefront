import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';

import { switchCategory } from '../../store/categories.js';

const CategorySelect = (props) => {
    return (
      <div>
          <h2>Browse Categories</h2>
          {props.categories.map((category,i) => {
        return(
          <button key={i} onClick={() => { props.switchCategory(category.name); props.switchProducts(category.name);}} title={category.name}>{category.displayName}</button>
        )
      })}
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
      categories: state.categories.categories
    }
  }

  const mapDispatchToProps = {
    switchCategory
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect);