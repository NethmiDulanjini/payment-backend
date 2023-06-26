import  express  from 'express'
import {addReview , login} from '../../operations/userOperations/index.mjs'
const router = express.Router()

router.get('/' ,(req,res,next)=>{
    res.send('user home')
})

router.post('/user_login' ,(req,res,next)=>{
    login(req,res)
})

router.post('/add_review' ,(req,res,next)=>{
    addReview(req,res)
})

export default router