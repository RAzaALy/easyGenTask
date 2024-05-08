import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import authService from "src/services/authService";
import { useAppDispatch } from "~configs/store/hooks";
import { actions } from "~features/Auth";
import Routes from "~constants/routes.enum";

const Signup: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const validationSchema = () => {
    return Yup.object().shape({
      name: Yup.string()
        .test(
          "len",
          "The name must be between 3 and 20 characters.",
          (val: any) =>
            val &&
            val.toString().length >= 3 &&
            val.toString().length <= 20
        )
        .required("name is required!"),
      email: Yup.string()
        .email("This is not a valid email.")
        .required("Email is required!"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Password must contain at least 8 characters, 1 letter, 1 number, and 1 special character."
        )
        .required("Password is required!"),
    });
  };

  const handleRegister = async (formValue: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await authService.signUp(formValue);
      dispatch(actions.setUser(response?.user));
      dispatch(actions.setAuthenticated(true));
      if (response?.token) navigate(Routes.APPLICATION)

    } catch (err) {
      // console.log(err.message)
      return err;
    }

  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign Up
          </h2>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form className="mt-8 space-y-6">

            <div className="rounded-md shadow-sm">
              <div className="mb-4">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="mt-1 text-red-500 text-sm"
                />
              </div>
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="mt-1 text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="mt-1 text-red-500 text-sm"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign Up
                </button>
              </div>
              <div className="text-sm text-center mt-4 text-indigo-600 hover:underline">
                <Link to="/login" className="text-indigo-600 hover:underline">
                  Already have an account?{" "}
                  LogIn
                </Link>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
