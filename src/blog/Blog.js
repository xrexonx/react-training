import React, { Component } from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";

class Blog extends Component {

  initialValues() {
    return {
      name: '',
      email: '',
      phone: '',
      website: ''
    };
  }

  onSubmit(values, actions) {
    actions.setSubmitting(true);
    console.log({values});
    fetch('http://localhost:8080/api/users', {
      method: 'POST',
      body: JSON.stringify(values),
      headers:{ 'Content-Type': 'application/json'}
    }).then(res => res.json())
    .then(data => {
      actions.setSubmitting(false);
      console.log({data})
    })
    .catch(error => console.error({error}));
  }

  render() {
    return (
      <div className="mdl-grid portfolio-max-width">
        <Formik onSubmit={this.onSubmit} initialValues={this.initialValues()}>
          {({isSubmitting}) => (
            <Form>
              <div className="mdl-textfield mdl-js-textfield">
                <Field className="mdl-textfield__input" type="text" name="name" />
                <label className="mdl-textfield__label" htmlFor="name">Name</label>
                <span className="mdl-textfield__error">
                  <ErrorMessage name="name" component="div" />
                </span>
              </div>
              <br/>
              <div className="mdl-textfield mdl-js-textfield">
                <Field className="mdl-textfield__input" type="email" name="email" />
                <label className="mdl-textfield__label" htmlFor="email">Email</label>
                <span className="mdl-textfield__error">
                  <ErrorMessage name="email" component="div" />
                </span>
              </div>
              <br/>
              <div className="mdl-textfield mdl-js-textfield">
                <Field className="mdl-textfield__input" type="number" name="phone" />
                <label className="mdl-textfield__label" htmlFor="phone">Phone</label>
                <span className="mdl-textfield__error">
                  <ErrorMessage name="phone" component="div" />
                </span>
              </div>
              <br/>
              <div className="mdl-textfield mdl-js-textfield">
                <Field className="mdl-textfield__input" type="text" name="website" />
                <label className="mdl-textfield__label" htmlFor="website">Website</label>
                <span className="mdl-textfield__error">
                  <ErrorMessage name="website" component="div" />
                </span>
              </div>
              <br/>
              <button
                disabled={isSubmitting}
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                Button
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Blog;