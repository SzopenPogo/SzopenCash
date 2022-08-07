import {Request, Response, NextFunction} from 'express';
import { createErrorMessage } from '../utils/message/createErrorMessage';

const routeNotFound = (req: Request, res: Response, next: NextFunction) => {
  const errorMessage = createErrorMessage(404, 'Route not found');
  res.status(errorMessage.status).send(errorMessage);
}

export default routeNotFound;