const model = require('../models/userModel');

const getAllUsers = async () => {
  const users = await model.getAllUsers();

  if (!users) {
    return ({ error: 404, message: 'Not found data' });
  }

  return users;
};

const getUserById = async (id) => {
  if (!id) {
    return ({ error: 404, message: 'invalid id' });
  }

  const user = await model.getUserById(id);

  if (!user) {
    return ({ error: 404, message: 'invalid id' });
  }

  return user;
};

const getUsersByState = async (state) => {
  if (!state) {
    return ({ error: 404, message: 'invalid state' });
  }

  const users = await model.getUsersByState(state);

  if (!users) {
    return ({ error: 400, message: 'invalid state' });
  }

  return users;
};

const insertNewUser = async (body) => {
  const { first_name: firstName, last_name: lastName } = body;

  const fullname = firstName + lastName;

  const verifyUser = model.getUserByName(fullname);

  if (verifyUser.length !== 0) return ({ error: 409, message: 'User already exists' });

  const { err } = await model.insertNewUser(body);

  if (err) return ({ error: 409, message: err.message });

  const allUsers = getAllUsers();
  return allUsers;
};

const updateImage = async (id, image) => {
  const user = await getUserById(id);

  if (user.error) return user;

  const { err } = await model.updateImage(id, image);

  if (err) return ({ error: 400, message: 'Error on image' });

  const updatedImage = await getUserById(id);

  return updatedImage;
};

const updateUser = async (body) => {
  const user = await getUserById(body.id);

  if (user.error) return user;

  const { err } = await model.updateUser(body);

  if (err) return ({ error: 400, message: 'Error on update user' });

  const updatedUser = await getUserById(body.id);

  return updatedUser;
};

const deleteUser = async (id) => {
  const user = await getUserById(id);

  if (user.error) return user;

  const { err } = await model.deleteUser(id);

  if (err) return ({ error: 400, message: 'Error on delete user' });

  return getAllUsers();
};

module.exports = {
  getAllUsers,
  getUserById,
  getUsersByState,
  insertNewUser,
  updateImage,
  updateUser,
  deleteUser,
};
