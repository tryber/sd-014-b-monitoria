const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controllers/userController');
const { checkInfo } = require('./middleware/userInfoVerifier');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', controller.getAllUsers);

app.get('/search', controller.getUsersByState);

app.get('/:id', controller.getUserById);

app.post('/user/new', checkInfo, controller.insertNewUser, errorMiddleware);

app.put('/user/update', checkInfo, controller.updateUser);

app.delete('/user/delete/:id', controller.deleteUser);

app.put('/image', controller.updateImage);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
