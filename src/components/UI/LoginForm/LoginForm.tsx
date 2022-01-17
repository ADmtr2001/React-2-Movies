import React from 'react';

import {useFormik} from 'formik';

import {Wrapper} from "./LoginForm.styles";
import Button from "../Button/Button";

import * as Yup from 'yup';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(5, 'Must be 5 characters or more').max(15, 'Must be 15 characters or less').required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  });

  return (
    <Wrapper>
      <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            placeholder="emilia.wolst@gmail.com"
            type="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && <div className='error-container'>{formik.errors.email}</div>}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="jq42lxi43"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password && <div className='error-container'>{formik.errors.password}</div>}

          <Button type='submit'>Submit</Button>
        </form>
    </Wrapper>
  );
};

export default LoginForm;