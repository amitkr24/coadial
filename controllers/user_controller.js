const User = require('../models/user');
module.exports.profile = function(req, res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id, function(err,user){
            if(user){
                return res.render('profile', {
                    title: "login",
                    user :user
                });
            }
        });
    }else {
        return res.redirect('login');
    }
};
module.exports.login = function(req,res){
    return res.render('login', {
        title: "login"
    });
};
module.exports.register = function(req,res){
    return res.render('register', {
        title: "register"
    });
};
module.exports.create = function(req,res){
    if(req.body.password  != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err,user){
        if(err){ console.log('error in finding user in signing up'); return }
        if(!user){
            console.log(req.body);
            User.create(req.body,function(err,user){
                if(err){ console.log('error in creating user in signing up'); return }
                return res.redirect('/user/login');
            })
        }else {
            return res.redirect('back');
        }
    });
};

// check user exits or not when login
module.exports.create_session = function(req,res){
    console.log('case1');
    User.findOne({email: req.body.email}, function(err,user){
    console.log(req.body);
        if(err){ console.log('error in finding user in signing in'); return res.redirect('back');}
        if(user.password!=req.body.password){
            return res.redirect('back');
        }else {
            res.cookie('user_id', user.id);
            return res.redirect('profile');
        }
    });
};