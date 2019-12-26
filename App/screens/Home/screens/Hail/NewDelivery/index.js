import React, { useState } from 'react';
import { Formik } from 'formik';
import { MediumText } from 'components/Text';

import { RFValue } from 'react-native-responsive-fontsize';
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
      <MediumText customstyle={{ fontSize: RFValue(15), marginBottom: RFValue(15) }}>
        Need to move stuff quick?
      </MediumText>
      <Formik
        initialValues={{}}
        onSubmit={submit}
        render={_props => <Form {...{ ..._props, isLoading }} />}
      />
    </>
  );
};
