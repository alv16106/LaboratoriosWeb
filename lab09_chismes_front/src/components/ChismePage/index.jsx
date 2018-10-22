import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';
import Spinner from 'react-spinkit';
import * as actions from '../../actions';
import Chisme from '../Chisme';

class ChismePage extends Component {
  
  componentDidMount() {
    const { loadChisme } = this.props
    loadChisme(this.props.match.params.id)
  }

  render() {
    const { loading, chisme } = this.props.estado.chismeReducer.page;   
    return (
      chisme ? (
      <div>
        <h1>{chisme.title}</h1>
        <h5>{chisme.date}</h5>
        <p>{chisme.content}</p>
      </div>):(
        <Spinner name="three-bounce" color="purple"/>
      )
    )
  }
}

const mapStateToProps = (state) => ({estado: state}) // if you don't need to mapStateToProps, just pass undefined
const mapDispatchToProps = (dispatch) => {
  return {
    loadChisme: id => {
      dispatch(actions.requestChisme(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChismePage);