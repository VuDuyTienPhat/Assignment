require('dotenv').config()
var express=require('express');
var app=express();
var cors=require('cors');
var bodyParser=require('body-parser');
var passport=require('passport');
let localStrategy=require('passport-local').Strategy;
var User=require('./models/user.model')
var path=require('path');

//1.middleware:
app.use(cors({origin:'http://localhost:4200'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(passport.initialize());

//2.kết nối mongoose:
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://thinh012362:game0908166924@cluster0teo-il0vh.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true}, (err) => {
    if (!err) {
        console.log(`mongoDB connection succeeded`);

    }
    else{
        console.log(`Error in mongodb connection: `+JSON.stringify(err,undefined,2));       
    }
});

let bcrypt=require('bcryptjs');
//3.cấu hình cho passport:
passport.use(new localStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        //trường hợp k có user nào có username như dzậy:
        if (!user) { return done(null, false,{message:'Username k tồn tại'}); }
        //TH có user nhưng sai password:
        //  đáng ra phải làm dzậy user && bcrypt.compare(user.password,password)==false
        if(user &&  user.password!=password){
          return done(null,false,{message:'Mật khẩu k đúng'})
        }
        //TH nhập đúng:
        return done(null, user);
      });
    }

    
  ));



var apiRoutes=require('./routes/api.route')
app.use('/api',apiRoutes);
app.use(express.static(path.join(__dirname,'public')));

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'public/index.html'))
})
var port=process.env.PORT||5000;//port trong env là 1234

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
    
})