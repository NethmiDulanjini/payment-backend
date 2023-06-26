import  express  from 'express'
import {addBidProduct , addSellingProduct , deleteProduct , getProducts , updateProduct} from '../../operations/sellerOperations/index.mjs'
const router = express.Router()

router.get('/' ,(req,res,next)=>{
    res.send('seller home')
})

router.post('/add_bid_product' ,(req,res,next)=>{
    addBidProduct(req,res)
})

router.post('/add_selling_product' ,(req,res,next)=>{
    addSellingProduct(req,res)
})

router.get('/get_products/:seller_id' ,(req,res,next)=>{
    getProducts(req,res)
})

router.put('/update_product/:product_id' ,(req,res,next)=>{
    updateProduct(req,res)
})

router.delete('/remove_product/:prodcut_id' ,(req,res,next)=>{
    deleteProduct(req,res)
})

export default router