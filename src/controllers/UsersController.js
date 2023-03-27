const AppError = require('../utils/AppError');

class UsersController{
  create(req, res){
    const {name, email, password, isAdmin} = req.body;

    if(!name){
      throw new AppError('Nome é obrigatório')
    }

    res.json({name, email, password, isAdmin});
  }
}

module.exports = UsersController;