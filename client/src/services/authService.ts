import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import {notification, apiUrl} from './config'
import { LoginData, SignUpData } from 'src/types/User';


// Define a custom error type with a message property
interface CustomError {
  message: string;
}

// Function to set authentication data in localStorage
export const setAuthData = (data: any): void => {
  localStorage.setItem('authUser', JSON.stringify(data));
};

// Function to remove authentication data from localStorage (logout)
export const logout = (): void => {
  localStorage.removeItem('authUser');
};

// Function to get authentication data from localStorage
export const getAuthData = (): any | null => {
  const data = localStorage.getItem('authUser');
  return data ? JSON.parse(data) : null;
};

// Function to check if user is authenticated based on localStorage data
export const isAuthenticated = (): boolean => {
  const data = localStorage.getItem('authUser');
  return !!data;
};

interface AuthService {
  signUp(payload: SignUpData): Promise<any>;
  logIn(payload: LoginData): Promise<any>;
}
//API URL-> https://thoughtful-dress-goat.cyclic.app/
const authService: AuthService = {
  async signUp(payload: SignUpData): Promise<any> {
    try {
      const { data }: AxiosResponse<any> = await axios.post(
        `${apiUrl.REACT_APP_API_URL}auth/register`,
        payload
      );
      toast.success("Successfully Registered !!", notification)
      setAuthData(data);
      return data; // Assuming the API returns some data upon successful sign-up
    } catch (error) {
      const axiosError = error as AxiosError<CustomError>;
      toast.error(axiosError.response?.data?.message || 'Sign-up failed', notification);
      throw new Error('Sign-up failed'); // Handle errors as needed
    }
  },

  async logIn(payload: LoginData): Promise<any> {
    try {
      const { data }: AxiosResponse<any> = await axios.post(
        `${apiUrl.REACT_APP_API_URL}auth/login`,
        payload
      );
      toast.success("Successfully Login !!", notification)

      setAuthData(data);
      return data; // Assuming the API returns a token upon successful sign-in
    } catch (error) {
      const axiosError = error as AxiosError<CustomError>;
      toast.error(axiosError.response?.data?.message || 'Sign-in failed', notification);
      throw new Error('Sign-in failed'); // Handle errors as needed
    }
  },
};

export default authService;
