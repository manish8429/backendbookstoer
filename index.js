import express from 'express'
const app = express()
import dotenv from 'dotenv'
import mongoose from 'mongoose';
// import bookroute from './routes/getbookroutes.js'
import bookroute from './routes/getbookroutes.js'
import cors from 'cors'
import userRoute from './routes/userroutes.js'; 
import bodyParser from 'body-parser';


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


dotenv.config();
const port = process.env.PORT || 4000;
const url = process.env.MongoDBURL;

//  moggodb connect
try {
  mongoose.connect(url) ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

   console.log("Db Connect")
} catch (error) {
 console.log(error) 
}

//  define route

app.use('/book', bookroute)
app.use('/user', userRoute)
app.use('/user', userRoute)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})