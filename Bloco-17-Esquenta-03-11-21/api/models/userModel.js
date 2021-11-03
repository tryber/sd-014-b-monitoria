const fs = require('fs');
const crypto = require('crypto');
const data = require('../data/data.json');

const generateId = () => {
  const hexstring = crypto.randomBytes(16).toString('hex');

  const id = `${hexstring.substring(0, 8)}-${hexstring.substring(8, 12)}-${hexstring.substring(12, 16)}-${hexstring.substring(16, 20)}-${hexstring.substring(20)}`;

  return id;
};

const verifyId = (id) => {
  const checkId = data.find((user) => user.id === id);

  if (checkId) generateId();

  return id;
};

const handleId = () => {
  const generatedId = generateId();
  const verifiedId = verifyId(generatedId);
  return verifiedId;
};

const fileWriter = () => {
  const newData = JSON.stringify(data);

  try {
    fs.writeFileSync('../../api/data/data.json', newData);
    return true;
  } catch (err) {
    return err;
  }
};

const getAllUsers = () => data;

const getUserById = (id) => data.find((user) => user.id === id);

const getUsersByState = (state) => data.filter((user) => user.state === state);

const getUserByName = (name) => data.filter((user) => {
  const fullname = user.first_name + user.last_name;
  return name === fullname;
});

const insertNewUser = (user) => {
  const id = handleId();

  const newUser = user;

  newUser.id = id;

  data.push(newUser);

  return fileWriter();
};

const updateImage = async (id, image) => {
  const user = await getUserById(id);
  const index = data.indexOf(user);
  data[index].image = image;

  return fileWriter();
};

const updateUser = async (body) => {
  const user = await getUserById(body.id);
  const index = data.indexOf(user);
  data[index] = body;

  return fileWriter();
};

const deleteUser = async (id) => {
  const user = await getUserById(id);
  const index = data.indexOf(user);
  data.splice(index, 1);

  return fileWriter();
};

module.exports = {
  getAllUsers,
  getUserById,
  getUsersByState,
  getUserByName,
  insertNewUser,
  updateImage,
  updateUser,
  deleteUser,
};
