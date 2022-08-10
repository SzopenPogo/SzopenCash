export interface UserEdit {
  [key: string]: any;
  userName?: string;
  password?: string;
  currentPassword: string;
}