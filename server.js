const express = require('express') ;
const app = express();
const dotenv = require('dotenv'); 
const connection = require('./database.js');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {fileURLToPath} = require('url');
const path = require('path');
const multer = require('multer');
const userRoute = require('./routes/User');
const taskRoute = require('./routes/Task');
const { Register } = require('./controllers/User.js');

const _dirname = path.dirname(__filename); // Use __dirname directly


app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/assets',express.static(path.join(_dirname,'public/assets')));

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        const picturePath = new Date().toISOString.replace(/:/g, '-') + file.originalname
        req.body.picturePath = picturePath
        cb(null,picturePath)
    }
})
const upload = multer({storage})
app.use('/auth/register',upload.single('picture'),Register)
app.use('/auth',userRoute);
app.use('task',taskRoute)

dotenv.config()

app.use((err,req,res,next)=>{
const status = err.status || 500
const message = err.message || 'Something went wrong'
return res.status(status).json(message)
})

const PORT = process.env.PORT || 5500;

connection();
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})