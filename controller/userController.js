const User=require('../model/user');

var jwt = require("jsonwebtoken");
const { expressjwt: expressJwt } = require("express-jwt");


exports.saveUser=(req,res)=>{

    const user=new User(req.body);
    user.save((err,user)=>{
        if(err){
            console.log(err);
            res.json({"error":err})
        }
        else{
        res.json("user saved");
        }
    })
}

exports.signin = (req, res) => {
    // console.log("000000000000000000000000000000000000000000000000000000000")
    const { email, password } = req.body;
  
    User.findOne({ email }, (err, user) => {
      if (err || !user) {
        return res.json({
          error: "USER email does not exists"
        });
      }
  
      if (!user.autheticate(password)) {
        return res.status(401).json({
          error: "Email and password do not match"
        });
      }
  
      const token = jwt.sign({ _id: user._id }, 'samplepro');
      const { _id, name, email, role } = user;
      return res.json({ token, user: { _id, name, email, role } });
    });
  };

  exports.isSignedIn = expressJwt({
    secret:'samplepro',
    userProperty: "auth",
    algorithms: ['sha1', 'RS256', 'HS256'],
  });
  

exports.checkHealth=(req,res)=>{
    console.log(".........................................")
    res.json("It's Working....");
}

exports.getAllDoc=(req,res)=>{
    res.json({"doc1":"aaaaaaaaa",
"doc2":"bbbb"})
}