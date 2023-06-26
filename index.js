import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import dotenv from 'dotenv'
import seller_router from './routes/sellerRoute/Route.mjs'
import user_router from './routes/userRoute/Route.mjs'

var app = express();
dotenv.config();

app.use(cors())
app.use(bodyParser.json())

app.use('/api/seller',seller_router)
app.use('/api/user',user_router)

app.listen(process.env.PORT,()=>{
    console.log('server started in port : ',process.env.PORT)
})