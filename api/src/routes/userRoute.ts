import { Router } from "express";
import changeStatusUser from "../controllers/user/changeStatusUser";
import createUser from "../controllers/user/createUser";
import editUser from "../controllers/user/editUser";
import getAllUsers from "../controllers/user/getAllUsers";
import getUser from "../controllers/user/getUser";
import getUserById from "../controllers/user/getUserById";
import loginUser from "../controllers/user/loginUser";
import logoutAllUser from "../controllers/user/logoutAllUser";
import logoutUser from "../controllers/user/logoutUser";
import auth from "../middleware/auth";
import authAdmin from "../middleware/authAdmin";

const userRouter = Router();

// TYPE: POST /user/create
// DESCRIPTION: Create new account
// ACCESS: PRIVATE, ADMIN
userRouter.post('/create', auth, authAdmin, createUser);

// TYPE: POST /user/login
// DESCRIPTION: Login
// ACCESS: PUBLIC
userRouter.post('/login', loginUser);

// TYPE: POST /user/logout
// DESCRIPTION: Logout
// ACCESS: PRIVATE
userRouter.post('/logout', auth, logoutUser);

// TYPE: POST /user/logoutAll
// DESCRIPTION: Logout
// ACCESS: PRIVATE
userRouter.post('/logoutAll', auth, logoutAllUser);

// TYPE: PATCH /user/edit
// DESCRIPTION: Edit user data
// ACCESS: PRIVATE
userRouter.patch('/edit', auth, editUser);

// TYPE: GET /user/me
// DESCRIPTION: Get user data
// ACCESS: PRIVATE
userRouter.get('/me', auth, getUser);

// TYPE: GET /user/admin/:id
// DESCRIPTION: Get user data by id
// ACCESS: PRIVATE, ADMIN
userRouter.get('/admin/:id', auth, authAdmin, getUserById);

// TYPE: GET /user/admin
// FILTERING: isAdmin=boolean, isActive=boolean
// DESCRIPTION: Get all users
// ACCESS: PRIVATE, ADMIN
userRouter.get('/admin', auth, authAdmin, getAllUsers);

// TYPE: PATCH /user/admin/status/:id
// DESCRIPTION: Change user status by id
// ACCESS: PRIVATE, ADMIN
userRouter.patch('/admin/status/:id', auth, authAdmin, changeStatusUser);



export default userRouter;