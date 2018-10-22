import React from 'react'

export const customInput = props => {
  const { ancho, label, id, type, meta } = props;
    return (
      <div className="row">
        <div className={`input-field col s${ancho}`}>
          <input
            {...props.input} 
            type={type}
            id={id}
            className={meta.touched ? ( meta.error ? "invalid": "valid") : ""}
          />
          <label htmlFor={id}>{label}</label>
          <span className="helper-text" data-error={meta.error} data-success="OK"></span>
        </div>
      </div>
    );
};