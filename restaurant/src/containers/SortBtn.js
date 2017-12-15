import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {grey300} from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import { updateList } from '../actions';

const styles = {
  chip: {
    margin: 15,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class ChipExampleSimple extends React.Component {
  handleClick(sortParam) {
      fetch(`http://localhost:3001/restaurants/${sortParam}`)
      .then(response => response.json())
      .then(data => {
        this.props.update(data)
      });
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <Chip
          key={this.props.sortParam}
          onClick={() => this.handleClick(this.props.sortParam)}
          style={styles.chip}
        >
          {this.props.text}
        </Chip>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurantsList
});

const mapDispatchToProps = (dispatch) => ({
  update: (data) => dispatch(updateList(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChipExampleSimple);
