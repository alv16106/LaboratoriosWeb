import uuid from 'uuid-v4';
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class PostFormDummy extends React.Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <div className={'PostForm'}>
        <input
          type="text"
          placeholder="Titulo"
          ref={ node => { this.titleInput = node; } }
        /><br></br>
        <textarea
          type="text"
          placeholder="Post"
          ref={ node => { this.textInput = node; } }
        /><br></br>
        <button
          onClick={
            () => {
              onSubmit(
                this.titleInput.value,
                this.textInput.value,
              );

              this.titleInput.value = "";
              this.textInput.value = "";
              this.titleInput.focus();
            }
          }
        >
          Postear
        </button>
      </div>
    );
  }
};

export default connect(
  undefined,
  dispatch => ({
    onSubmit(title, text) {
      dispatch(actions.addPost(uuid(),title,text,0));
    }
  })
)(PostFormDummy);
