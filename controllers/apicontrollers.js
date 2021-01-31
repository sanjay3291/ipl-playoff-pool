const sayHello = (req, res, next) => {
  res.status(200).json({
    body: "Hello from the server!",
  });
};

const saySomething = (req, res, next) => {
  res.status(200).json({
    body: "Hello from the server!",
  });
};

module.exports.sayHello = sayHello;
