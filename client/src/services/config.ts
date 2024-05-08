import { ToastOptions } from 'react-toastify';

// Define the notification configuration
export const notification: ToastOptions = {
  position: 'bottom-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

export const apiUrl =
{

  REACT_APP_API_URL: 'https://thoughtful-dress-goat.cyclic.app/'
}