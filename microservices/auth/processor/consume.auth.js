const { authService } = require('../services');

const register  = async (payload) => {
  console.log(payload)
  try {
    const response = await authService.register(payload);
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



