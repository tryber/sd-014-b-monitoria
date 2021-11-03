const emailRegex = /\S+@\S+\.\S+/;
const dateRegex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

const userInfoVerifier = (first_name, last_name, birthday, image, email, phone) => {
  if (!first_name) return ({ message: 'invalid data: "first_name"'});
  if (!last_name) return ({ message: 'invalid data: "last_name"'});
  if (!dateRegex.test(birthday)) return ({ message: 'invalid data: "birthday"'});
  if (!image) return ({ message: 'invalid data: "image"'});
  if (!emailRegex.test(email)) return ({ message: 'invalid data: "email"'});
  if (!phone) return ({ message: 'invalid data: "phone"'});
  return false;
}

const addressVerifier = (city, state, address, streetName) => {
  if (!city) return ({ message: 'invalid data: "city"'});
  if (!state) return ({ message: 'invalid data: "state"'});
  if (!address) return ({ message: 'invalid data: "address"'});
  if (!streetName) return ({ message: 'invalid data: "streetName"'});
  return false;
}

const checkInfo = (req, res, next) => {
  const {first_name, last_name, birthday, image, email, phone, city, state, address, streetName} = req.body;

  const userInfo = userInfoVerifier(first_name, last_name, birthday, image, email, phone);
  const addressInfo = addressVerifier(city, state, address, streetName);

  if (userInfo.message || addressInfo.message) {
    console.log(userInfo.message || addressInfo.message);
    return res.status(400).json({ message: userInfo.message || addressInfo.message});
  }

  next();
};

module.exports = { checkInfo };
