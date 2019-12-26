import React, { useState } from 'react';
import { Formik } from 'formik';
import Form from './Form';

export default () => {
  const [isLoading, setIsLoading] = useState(false);
  const submit = async values => {
    setIsLoading(true);
    try {
      console.log(values);
    } catch (e) {
      console.log(e.response ? e.response : e);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Formik initialValues={{}} onSubmit={submit}>
        {_props => (
          <Form
            {...{
              ..._props,
              isLoading,
            }}
          />
        )}
      </Formik>
    </>
  );
};
