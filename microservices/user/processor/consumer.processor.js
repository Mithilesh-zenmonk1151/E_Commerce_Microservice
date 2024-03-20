const { userService } = require('../services');

exports.register  = async (payload) => {
  const {userDetails = {}} = payload
  try {
    const response = await userService.register(userDetails);
    if (!response) {
      throw new Error('User could not be created.', userDetails);
    }
    
  } catch (error) {
    console.log(`auth.user_details:  Error occured during Group configured: ${error.message}`, '\n');
    throw error;
  }
};



