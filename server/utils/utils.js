const jwt = require('jsonwebtoken');

// PART 1: 
// generate token and return it
function generateToken(user) {
 
    //1. Don't use password and other sensitive fields
    //2. Use the information that are useful in other parts
    if (!user) return null; 
    
    return jwt.sign({
      userId: user.userId,
      name: user.name,
      username: user.username,
      isAdmin: user.isAdmin
      }, 
      process.env.JWT_SECRET, {
      expiresIn: 60*60*24 // expires in 24 hours
    });
  
  }
  
  // PART 2: 
  // return basic user details
  function getCleanUser(user) {
  
    if (!user) return null;
  
    return {
      userId: user.userId,
      name: user.name,
      username: user.username,
      isAdmin: user.isAdmin
    };
  
  }
  
// PART 3: 
// export 2 functions
module.exports = {
    generateToken,
    getCleanUser
  }