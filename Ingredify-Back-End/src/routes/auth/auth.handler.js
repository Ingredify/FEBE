const prisma = require('../../utils/prisma');
const bcrypt = require('bcrypt');
const { signToken } = require('../../utils/jwt');

const registerHandler = async (request, h) => {
  const { name, email, password } = request.payload;

  if (password.length < 8) {
    const response = h.response({
      status: 'fail',
      message: 'password has to be more than 8 character',
    });
    response.code(400);
    return response;
  }

  const isUserExist = await prisma.user.findUnique({ where: { email } });
  if (isUserExist) {
    const response = h.response({
      status: 'fail',
      message: 'User already exist',
    });
    response.code(400);
    return response;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hashedPassword,
      },
    });
    console.log(newUser); //! Cmn buat keliatan aja
    const response = h.response({
      error: false,
      message: 'user created',
    });
    response.code(201);
    return response;
  } catch (error) {
    console.log(error);
    const response = h.response({
      status: 'fail',
      message: 'Server error',
    });
    response.code(500);
    return response;
  }
};

const loginHandler = async (request, h) => {
  const { email, password } = request.payload;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    const response = h.response({
      status: 'fail',
      message: 'User not found',
    });

    response.code(401);
    return response;
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    const response = h.response({
      status: 'fail',
      message: 'Invalid email or password',
    });
    response.code(401);
    return response;
  }

  try {
    const token = signToken({ id: user.id, email: user.email });
    const response = h.response({
      error: false,
      message: 'Login success',
      token,
    });
    response.code(200);
    console.log(`${user.name} logged in`); //! Cmn buat keliatan aja
    return response;
  } catch (error) {
    console.log(error);
    const response = h.response({
      status: 'fail',
      message: 'Server error',
    });
    response.code(500);
    return response;
  }
};

module.exports = {
  loginHandler,
  registerHandler
};
