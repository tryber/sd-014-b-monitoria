const axios = require('axios');

const getAllUsers = () => axios.get('http://localhost:8080/')
  .then((response) => response.data);

const getUserById = (id) => axios.get(`http://localhost:8080/${id}`)
  .then((response) => response.data);

const insertUser = (newUser) => axios.post('http://localhost:8080/user/new', newUser)
  .then((response) => response.data);

const updateImage = (id, image) => axios.put('http://localhost:8080/image', { id, image })
  .then((response) => response.data);

const updateUser = (user) => axios.put('http://localhost:8080/user/update', user)
  .then((response) => response.data);

const deleteUser = (user) => axios.delete(`http://localhost:8080/user/delete/${user.id}`)
  .then((response) => response.data);

module.exports = {
  getAllUsers,
  getUserById,
  insertUser,
  updateImage,
  updateUser,
  deleteUser,
};
