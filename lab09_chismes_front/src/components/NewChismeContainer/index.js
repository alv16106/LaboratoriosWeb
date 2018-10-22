/* import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewChismeContainer extends Component {
  render() {
    return <NewChismeForm handleSubmit={this.props.addNew} />;
  }
}

export default connect(
  undefined,
  (dispatch) => ({
    onClick() {
      dispatch(actions.removeChisme(id));
    }
  })
)(NewChismeContainer); */

import React from 'react';
import { connect } from 'react-redux';
import NewChismeForm from '../NewChismeForm';
import * as actions from '../../actions';
import uuid from 'uuid-v4';

const NewChismeContainer = ({ handleChismeSubmit, values }) => 
  <NewChismeForm
    onSubmit={values => handleChismeSubmit(values)}
  />

const mapStateToProps = undefined // if you don't need to mapStateToProps, just pass undefined
const mapDispatchToProps = (dispatch) => {
  return {
    handleChismeSubmit: values => {
      const post = {
        ...values,
        id: uuid()
      }
      dispatch(actions.addChismeRequest(post))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewChismeContainer);