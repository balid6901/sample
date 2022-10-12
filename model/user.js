var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: Number,
      default: 0
    },
  },
  { timestamps: true }
);


userSchema.methods = {
  autheticate: function(plainpassword) {
    return plainpassword === this.password;
  },
};

module.exports = mongoose.model("User", userSchema);
