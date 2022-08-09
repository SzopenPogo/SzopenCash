import { BACKEND_URL } from "data/routes/backend/backend";

export const BACKEND_USER_URL = `${BACKEND_URL}/user`;
export const BACKEND_USER_ADMIN_URL = `${BACKEND_USER_URL}/admin`;

export const BACKEND_USER_LOGIN_URL = `${BACKEND_USER_URL}/login`;
export const BACKEND_USER_LOGOUT_URL = `${BACKEND_USER_URL}/logout`;
export const BACKEND_USER_LOGOUT_ALL_URL = `${BACKEND_USER_URL}/logoutAll`;

export const BACKEND_USER_EDIT_URL = `${BACKEND_USER_URL}/edit`;

export const BACKEND_USER_GET_URL = `${BACKEND_USER_URL}/me`;
export const BACKEND_USER_GET_BY_ID_URL = `${BACKEND_USER_ADMIN_URL}`;  // /:id
export const BACKEND_USER_GET_ALL_URL = `${BACKEND_USER_ADMIN_URL}`;

export const BACKEND_USER_TOGGLE_STATUS_URL = `${BACKEND_USER_ADMIN_URL}/status`;  // /:id