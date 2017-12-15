import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateList } from '../actions';

import { Field, reduxForm} from 'redux-form';
import {RadioButton} from 'material-ui/RadioButton';
import { TextField, RadioButtonGroup} from 'redux-form-material-ui';
import {AutoComplete as MUIAutoComplete} from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';

const required = value => (value == null ? 'Required' : undefined);
const style = {
  rating:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rate:{
    margin: '17px 10px 0 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  btn:{
    margin: '50px 20px',
  },
};


let MyForm = props => {
    const {handleSubmit, pristine, reset, submitting, rate} = props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="name" component={TextField} hintText="Restaurant Name" floatingLabelText="Name" validate={required} /><br />
        <Field name="imgUrl" component={TextField} hintText="Restaurant Image URL" floatingLabelText="Image" validate={required} /><br/><br/>
        <div style={style.rating}>
          <h3>1</h3>
          <Field name="rating" component={RadioButtonGroup} validate={required} style={style.rate} >
            <RadioButton style={style.radioBtn} value="1" />
            <RadioButton style={style.radioBtn} value="2" />
            <RadioButton style={style.radioBtn} value="3" />
            <RadioButton style={style.radioBtn} value="4" />
            <RadioButton style={style.radioBtn} value="5" />
          </Field>
          <h3>5</h3>
        </div>
        <div>
          <RaisedButton label="CLEAR" style={style.btn} onClick={reset} />
          <RaisedButton type="submit" label="SUBMIT" primary style={style.btn} disabled={submitting} />
        </div>
      </form>
    )
}

MyForm = reduxForm({
  form: 'myForm',
})(MyForm)

export default MyForm;

// const mapStateToProps = (state) => ({
//   restaurants: state.restaurantsList,
//   form: state.formReducer
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   update: (data) => dispatch(updateList(data))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(MyForm);
