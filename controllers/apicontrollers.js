const Datastore = require("nedb");

const database = new Datastore("database.db");
database.loadDatabase();

const sayHello = (req, res, next) => {
  res.status(200).json({
    body: "Hello from the server!",
  });
};

const submitData = (req, res, next) => {
  const data = req.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  res.status(200).json({
    status: "Success",
    timestamp: data.timestamp,
    username: data.username,
    groupname: data.groupname,
    order: data.teamsObject
  });
};

module.exports.submitData = submitData;

module.exports.sayHello = sayHello;
