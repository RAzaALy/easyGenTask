import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import authService from 'src/services/authService';
import { actions } from '~features/Auth';
import { useAppDispatch } from '~configs/store/hooks';
import Routes from '~constants/routes.enum';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const validationSchema = () => {
    return Yup.object().shape({
      email: Yup.string().email('Invalid email address.').required('Email is required!'),
      password: Yup.string()
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          'Password must contain at least 8 characters, 1 letter, 1 number, and 1 special character.'
        )
        .required('Password is required!'),
    });
  };

  const handleLogin = async (formValue: { email: string; password: string }) => {
    try {
      const response = await authService.logIn(formValue);
      dispatch(actions.setUser(response?.user));
      dispatch(actions.setAuthenticated(true));
      if (response?.token) navigate(Routes.APPLICATION);
    } catch (err) {
      return err;
    }
  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
        </div>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleLogin}>
          <Form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm">
              <div className="mb-4">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" className="mt-1 text-sm text-red-500" />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Login
                </button>
              </div>
              <div className="mt-4 text-center text-sm text-indigo-600 hover:underline">
                <Link to="/signup" className="text-indigo-600 hover:underline">
                  Don't have an account? Sign Up
                </Link>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
