const { cartService } = require('../services');

const register  = async (payload) => {
  console.log(payload)
  try {
    const response = await cartService.createCart(payload);
    if (!response) {
      throw new Error('Product not Found', payload);
    }
    
  } catch (error) {
    console.log(`auth.user_details:  Error occured during Group configured: ${error.message}`, '\n');
    throw error;
  }
};

module.exports = {
    register,
  
};



