import React, {FC, useState} from 'react';

import {useFormik} from 'formik';

import {Wrapper} from "./LoginForm.styles";
import Button from "../Button/Button";
import {AiFillGoogleCircle} from 'react-icons/ai';

import * as Yup from 'yup';
import {signInWithGoogle} from "../../../common/firebase/firebase-config";

interface LoginFormProps {
  register: (email: string, password: string) =>  Promise<void>;
  login: (email: string, password: string) =>  Promise<void>;
  hideModal: () => void;
}

const LoginForm: FC<LoginFormProps> = ({register, login, hideModal}) => {
  const [isLogin, setIsLogin] = useState(true);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Must be 6 characters or more').max(15, 'Must be 15 characters or less').required('Required'),
    }),
    onSubmit: (values) => {
      if (isLogin) {
        login(values.email, values.password);
      } else {
        register(values.email, values.password);
      }
      hideModal();
    }
  });

  const loginWithGoogle = () => {
    signInWithGoogle();
    hideModal();
  }

  return (
    <>
      <div className='blur-container' onClick={hideModal}/>
      <Wrapper>
        <div className='buttons-container'>
          <Button color='white' hoverColor='black' hoverBackground='white'
                  onClick={() => setIsLogin(true)}>Login</Button>
          <Button color='white' hoverColor='black' hoverBackground='white' onClick={() => setIsLogin(false)}>Sign
            Up</Button>
        </div>
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
          {formik.touched.password && formik.errors.password &&
						<div className='error-container'>{formik.errors.password}</div>}

          <Button type='submit' disabled={!!formik.errors.email || !!formik.errors.password}>{isLogin ? 'Login' : 'Sign Up'}</Button>
        </form>

        <div className='additional-container'>
          <button><AiFillGoogleCircle onClick={loginWithGoogle}/></button>
        </div>
      </Wrapper>
    </>
  );
};

export default LoginForm;