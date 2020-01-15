import React, { useState } from 'react';
import { Formik } from 'formik';
import api from 'services/api';
import Form from './Form';

export default ({ setDetails, setState, currentPlace }) => {
  const [isLoading, setIsLoading] = useState(false);
  const fetchInfo = async values => {
    setIsLoading(true);
    const {
      location_origin: { placeID: location_origin },
      location_destination: { placeID: location_destination },
    } = values;
    try {
      const {
        data: {
          data: { details },
        },
      } = await api({
        method: 'POST',
        url: '/delivery/info',
        data: {
          location_origin,
          location_destination,
          return_trip: false,
        },
      });
      setDetails({ ...details, ...values, return_trip: false });
      setState('PRICING');
    } catch (e) {
      console.log(e.response ? e.response : e);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ location_origin: currentPlace }}
        onSubmit={fetchInfo}
      >
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
