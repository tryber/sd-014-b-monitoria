module.exports = (err, _req, res) => {
  res.status(err.error).json({ message: err.message })
};
