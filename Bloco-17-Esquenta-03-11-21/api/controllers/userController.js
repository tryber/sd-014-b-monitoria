const service = require('../services/userService');

const getAllUsers = async (_req, res, next) => {
  const data = await service.getAllUsers();

  if (data.error) return next(data);

  return res.status(200).json(data);
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;

  const user = await service.getUserById(id);

  if (user.error) return next(user);

  return res.status(200).json([user]);
};

const getUsersByState = async (req, res, next) => {
  const { state } = req.query;

  const users = await service.getUsersByState(state);

  if (users.error) return next(users);

  return res.status(200).json(users);
};

const insertNewUser = async (req, res, next) => {
  const { body } = req;

  const newUser = await service.insertNewUser(body);

  if (newUser.error) return next(newUser);

  return res.status(201).json(newUser);
};

const updateImage = async (req, res, next) => {
  const { body: { image, id } } = req;

  const newImage = await service.updateImage(id, image);

  if (newImage.error) return next(newImage);

  return res.status(201).json(newImage);
};

const updateUser = async (req, res, next) => {
  const { body } = req;
  // console.log('🚀 ~ file: userController.js ~ line 53 ~ updateUser ~ body', body);

  const users = await service.updateUser(body);

  if (users.error) return next(users);

  return res.status(201).json(users);
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;

  const user = await service.deleteUser(id);

  if (user.error) return next(user);

  return res.status(200).json(user);
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
