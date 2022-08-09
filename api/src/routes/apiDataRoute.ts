import { Router } from "express";
import getApiData from "../controllers/apiData/getApiData";

const apiDataRouter = Router();

// TYPE: GET /apiData
// DESCRIPTION: send api data
// ACCESS: PUBLIC
apiDataRouter.get('/', getApiData);

export default apiDataRouter;