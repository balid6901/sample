const express=require('express')
const router=express.Router();

const {saveUser,checkHealth, isSignedIn,getAllDoc,signin}=require("../controller/userController")


router.post("/user/signup",saveUser);
router.post("/user/signin",signin);
router.get("/health",checkHealth)
router.get("/get/all/doc",isSignedIn,getAllDoc);

module.exports=router;