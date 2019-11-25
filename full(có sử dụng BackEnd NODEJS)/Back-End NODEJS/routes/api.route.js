var express = require('express');
var router = express.Router();
const User = require('../models/user.model');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var passport = require('passport');
var jwt = require('jsonwebtoken');


//khi đăng kí thì post lên /api/register
router.post('/register', function (req, res) {
    User.findOne({ username: req.body.username }).exec((err, user) => {
        if (user) {
            return res.json({ message: 'user đã tồn tại' })
        }
        else {
            let newUser = new User({
                "username": req.body.username,
                "email": req.body.email,
                "password":req.body.password
                // "password": bcrypt.hashSync(req.body.password, salt)               
            });
            //save vào db:
            newUser.save((err, newUser) => {
                if (err) throw err;
                else {
                    return res.json(newUser);
                }
            })
        }
    })

})

//đăng nhập
router.post('/authenticate', function (req, res) {
    passport.authenticate('local', function (err, user, info) {

        if (err)
            return res.status(400).json(err)
        else if (user) {
            return res.status(200).json(
                {
                    "token": jwt.sign({ _id: user._id, username: user.username }, 'shhhhh,day la bi bat', { expiresIn: "30m" })
                }
            )
        }
        //unknown user or wrong password
        else {
            return res.status(404).json(info);
        }
        //*info là message từ trong trong passportConfig
    }
    )(req, res);
});


//quen mat khau:
router.post('/quenmatkhau', function (req, res) {
    User.findOne({ username: req.body.username, email: req.body.email }, (err, user) => {
        if (err) {
            return res.json(err);
        }
        if (user) {

            return res.json({ password: user.password });
        }
        if (!user) {
            return res.json({ message: "Username hoặc Email k đúng" })
        }


    });
    //nếu k findOne thì nó trả về [] các đối tượng json

});

//đổi mat khau(update password):
router.put('/updateUser/:id', function (req, res) {
    User.findById(req.params.id).exec((err, user) => {
        user.password = req.body.passwordMoi;
        user.save();
        return res.json({ message: "update thành công" });
    });

});







module.exports = router;