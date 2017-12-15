import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import Star from 'material-ui/svg-icons/toggle/star';
import moment from 'moment'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '80%',
    height: '70%',
  },
  iconStyles:{
    margin: -5,
    color: 'white',
    height: 15,
  },
  rating: {
    margin: 10,
  },
  box: {
    boxShadow: '0 0 6px 1px rgba(50,50,50,0.1)'
  }
};

const renderStar = (rating) => {
  var rate = []
  for (var i = 0; i < rating; i++) {
    rate.push(<Star key={i} style={styles.iconStyles}/>)
  }
  return rate;
}


const GridListExampleSimple = (props) => (
  <div style={styles.root}>
    <GridList
      cols={3}
      padding={10}
      cellHeight={270}
      style={styles.gridList}
    >
      {props.restaurants.map((tile) => (
        <GridTile
          key={tile.name}
          title={tile.name}
          style={styles.box}
          subtitle={<span>created: {moment(tile.createDate).format("MMM Do")}</span>}
          actionIcon={
            <span style={styles.rating}>
              {renderStar(tile.rating)}
            </span>}
        >
          <img src={tile.imgUrl} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;
