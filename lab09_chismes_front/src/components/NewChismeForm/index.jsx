import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {customInput} from '../customInputs'
import * as actions from '../../actions';
import { uuidv4 } from 'uuid';

import {
  required
} from '../../formValidators';

class NewChismeForm extends Component {
    render() {
      const { handleSubmit, ancho } = this.props;
      //const isInvalid = email === '';
      return (
        <div className={`col s${ancho}`}>
          <h3>Nuevo Chisme</h3>
          <form onSubmit={handleSubmit}>
            <Field
              name = "title"
              label = "Titulo"
              component = {customInput}
              type = "text"
              id = "title"
              ancho = "10"
              validate={[required]}
            />
            <Field
              name = "content"
              label = "contenido"
              component = {customInput}
              type = "text"
              id = "content"
              ancho = "10"
              validate={[required]}
            />
            <button className="waves-effect waves-light btn" type="submit">
              Postear mi chisme
            </button>
          </form>
        </div>
      );
    }
  }

export default reduxForm({
  form: 'nuevoChisme'
})(NewChismeForm);