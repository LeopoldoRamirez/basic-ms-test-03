import { Router } from "express";
import { getAllDemos } from "../controllers/demo.controller";


const router = Router();

router.get('/', getAllDemos );


export default router;