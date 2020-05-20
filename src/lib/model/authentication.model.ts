export interface UserRequest {
  firstName: string;
  middleName?: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  password: string;
  roleId: string;
}

export interface LoginRequest {
  emailAddress: string;
  password: string;
}
