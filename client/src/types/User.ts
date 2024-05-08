export interface User {
  username: string;
  email: string;
  password: string;
  // You can add more properties as needed, such as name, role, etc.
}

export interface SignUpData {
  name: string;
  email: string;
  password: string;
}


export interface LoginData {
  email: string;
  password: string;
}