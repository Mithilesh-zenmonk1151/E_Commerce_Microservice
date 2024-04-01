const { userService } = require('../services');

const register  = async (payload) => {
  // const {userDetails = {}} = payload
  console.log(payload)
  console.log("userConsumerefgrfre",payload)
  try {
    const response = await userService.register(payload);
    if (!response) {
      throw new Error('User could not be created.', payload);
    }
    
  } catch (error) {
    console.log(`auth.user_details:  Error occured during Group configured: ${error.message}`, '\n');
    throw error;
  }
};

module.exports = {
  register,
  
};



