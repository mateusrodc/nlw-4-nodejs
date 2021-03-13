import {Router} from 'express';
import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();
const userController = new UserController()
const surveyController = new SurveysController()
const surveyUserController = new SendMailController()

router.post('/users', userController.create)
router.get('/users', userController.show)
router.post('/surveys',surveyController.create)
router.get('/survey',surveyController.show)

router.post('/sendemail',surveyUserController.execute)

export {router};