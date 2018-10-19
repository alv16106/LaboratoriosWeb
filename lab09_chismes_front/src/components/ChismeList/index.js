import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';

import * as actions from '../../actions';
import Chisme from '../Chisme';

class ChismeList extends Component {

  componentDidMount() {
    const { getChismes } = this.props;
    getChismes()
  }

  render() {
    const { chismes } = this.props
    return (
      <div>
        {chismes.map(({id}, i) => <Chisme key={i} id={id}></Chisme>)}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    chismes: selectors.getChismes(state),
  }),
  (dispatch) => ({
    getChismes() {
      dispatch(actions.fetchChismesRequest());
    }
  }),
)(ChismeList);