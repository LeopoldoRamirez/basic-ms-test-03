import { Router } from "express";
import demoRouter from "./demo.router";


const router = Router();

router.use( '/api/demos', demoRouter );


//default routes
router.get('/', ( request, response )=>{
    response.send('API with Babel');
})


export default router;

