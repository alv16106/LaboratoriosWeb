import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';
import Spinner from 'react-spinkit';
import * as actions from '../../actions';
import { Link} from 'react-router-dom'

const Chisme = ({
  id,
  title,
  content,
  confirmed,
  onClick
}) => (
  <div className="row">
  <div className="col s12 m6">
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">{`#${id} ${title}`}</span>
        <p>{content}</p>
      </div>
      <div className="card-action">
        <button onClick={onClick} className="waves-effect waves-light btn">Borrar</button>
      </div>
      {
        !confirmed && (
          <div>
            <Spinner name="three-bounce" color="white"/> &nbsp;
          </div>
        )
      }
    </div>
  </div>
</div>    
);

export default connect(
  (state, { id }) => ({
    ...selectors.getChisme(state, id),
  }),
  (dispatch, { id }) => ({
    onClick() {
      dispatch(actions.removeChisme(id));
    }
  }),
)(Chisme);