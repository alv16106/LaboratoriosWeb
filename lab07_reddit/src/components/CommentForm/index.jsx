import uuid from 'uuid-v4';
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class CommentForm extends React.Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <div>
        <input
          type="text"
          placeholder="Comentario"
          ref={ node => { this.comment = node; } }
        />
        <button
          onClick={
            () => {
              onSubmit(
                this.comment.value,
              );
              this.comment.value = "";
              this.comment.focus();
            }
          }
        >
          Comentar
        </button>
      </div>
    );
  }
};

export default connect(
  undefined,
  (dispatch, { id }) => ({
    onSubmit(text) {
      dispatch(actions.commentPost(uuid(), id, text));
    }
  })
)(CommentForm);
