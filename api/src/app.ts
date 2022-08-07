import cors from "cors";
import express from "express";
import 'colors';
import { PORT } from "./constants/app/app";
import connectDatabase from "./config/database";
import routeNotFound from "./middleware/routeNotFound";
import path from "path";
import userRouter from "./routes/userRoute";

const app = express();

// APP CONFIG
connectDatabase();
app.use(cors());
app.use(express.json());

// ROUTE /user - User Router
app.use('/user', userRouter);


// ROUTE /images - SERVE IMAGES (SERVER_URL/images/...)
const dirname = path.resolve();
app.use('/images', express.static(path.join(dirname, '/images')));

// ROUTE NOT FOUND
app.use(routeNotFound);


app.listen(PORT, () => {
  console.log(`>> Server running on PORT: ${PORT}`.yellow.bgBlack.bold);
});