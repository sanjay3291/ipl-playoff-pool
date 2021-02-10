const Datastore = require("nedb");
var cheerio = require("cheerio");
var axios = require("axios");

const database = new Datastore("database.db");

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
    order: data.teamsObject,
  });
};

const getGroupData = async (req, res, next) => {
  groupName = req.query.groupName;
  const $ = await fetchHTML(
    "https://www.espncricinfo.com/table/series/8048/season/2020/indian-premier-league"
  );
  colObj = [];
  picksTableData = [];

  database.loadDatabase();

  for (var i = 0; i < 8; i++) {
    var rowObj = new Object();
    let table = $(
      "#main-container > div > div.series-standings-page-wrapper > div > div:nth-child(2) > div > div > div > table > tbody",
      $.html()
    );
    rowObj.rank =
      table[0].children[i].children[0].children[0].children[0].children[0].data;
    rowObj.teamImage =
      table[0].children[
        i
      ].children[0].children[0].children[1].children[0].children[0].children[0].children[0].attribs.src;
    rowObj.teamName =
      table[0].children[
        i
      ].children[0].children[0].children[1].children[0].children[1].children[0].children[0].data;
    rowObj.M = table[0].children[i].children[1].children[0].data;
    rowObj.W = table[0].children[i].children[2].children[0].data;
    rowObj.L = table[0].children[i].children[3].children[0].data;
    rowObj.NR = table[0].children[i].children[4].children[0].data;
    rowObj.PT = table[0].children[i].children[5].children[0].data;
    rowObj.NRR = table[0].children[i].children[6].children[0].data;
    colObj.push(rowObj);
  }

  database.find({ groupname: groupName }, function (err, docs) {
    leaderBoardData = [];
    for (var i = 0; i < docs.length; i++) {
      points = 0;
      username = docs[i].username;
      for (var j = 0; j < 4; j++) {
        if (colObj[j].teamName == "Chennai Super Kings") {
          for (var k = 0; k < docs[i].teamsObject.length; k++) {
            if (docs[i].teamsObject[k].team === "CSK") {
              points = points + docs[i].teamsObject[k].id;
            }
          }
        } else if (colObj[j].teamName == "Delhi Capitals") {
          for (var k = 0; k < docs[i].teamsObject.length; k++) {
            if (docs[i].teamsObject[k].team === "DC") {
              points = points + docs[i].teamsObject[k].id;
            }
          }
        } else if (colObj[j].teamName == "Kolkata Knight Riders") {
          for (var k = 0; k < docs[i].teamsObject.length; k++) {
            if (docs[i].teamsObject[k].team === "KKR") {
              points = points + docs[i].teamsObject[k].id;
            }
          }
        } else if (colObj[j].teamName == "Kings XI Punjab") {
          for (var k = 0; k < docs[i].teamsObject.length; k++) {
            if (docs[i].teamsObject[k].team === "KXIP") {
              points = points + docs[i].teamsObject[k].id;
            }
          }
        } else if (colObj[j].teamName == "Mumbai Indians") {
          for (var k = 0; k < docs[i].teamsObject.length; k++) {
            if (docs[i].teamsObject[k].team === "MI") {
              points = points + docs[i].teamsObject[k].id;
            }
          }
        } else if (colObj[j].teamName == "Royal Challengers Bangalore") {
          for (var k = 0; k < docs[i].teamsObject.length; k++) {
            if (docs[i].teamsObject[k].team === "RCB") {
              points = points + docs[i].teamsObject[k].id;
            }
          }
        } else if (colObj[j].teamName == "Rajasthan Royals") {
          for (var k = 0; k < docs[i].teamsObject.length; k++) {
            if (docs[i].teamsObject[k].team === "RR") {
              points = points + docs[i].teamsObject[k].id;
            }
          }
        } else if (colObj[j].teamName == "Sunrisers Hyderabad") {
          for (var k = 0; k < docs[i].teamsObject.length; k++) {
            if (docs[i].teamsObject[k].team === "SRH") {
              points = points + docs[i].teamsObject[k].id;
            }
          }
        }
      }
      leaderBoardDataSingle = {
        username: username,
        points: points,
      };
      leaderBoardData.push(leaderBoardDataSingle);
    }
    leaderBoardData.sort(function (a, b) {
      var x = a.points > b.points ? -1 : 1;
      return x;
    });
    for (var i = 0; i < leaderBoardData.length; i++) {
      leaderBoardData[i].rank = i + 1;
    }

    for (var i = 0; i < docs.length; i++) {
      picksTableDataSingle = {};
      picksTableDataSingle.username = docs[i].username;
      picksTableDataSingle.pointsArray = [];
      for (var k = 0; k < docs[i].teamsObject.length; k++) {
        if (docs[i].teamsObject[k].team === "CSK") {
          picksTableDataSingle.pointsArray[0] = docs[i].teamsObject[k].id;
        } else if (docs[i].teamsObject[k].team === "DC") {
          picksTableDataSingle.pointsArray[1] = docs[i].teamsObject[k].id;
        } else if (docs[i].teamsObject[k].team === "KKR") {
          picksTableDataSingle.pointsArray[2] = docs[i].teamsObject[k].id;
        } else if (docs[i].teamsObject[k].team === "KXIP") {
          picksTableDataSingle.pointsArray[3] = docs[i].teamsObject[k].id;
        } else if (docs[i].teamsObject[k].team === "MI") {
          picksTableDataSingle.pointsArray[4] = docs[i].teamsObject[k].id;
        } else if (docs[i].teamsObject[k].team === "RCB") {
          picksTableDataSingle.pointsArray[5] = docs[i].teamsObject[k].id;
        } else if (docs[i].teamsObject[k].team === "RR") {
          picksTableDataSingle.pointsArray[6] = docs[i].teamsObject[k].id;
        } else if (docs[i].teamsObject[k].team === "SRH") {
          picksTableDataSingle.pointsArray[7] = docs[i].teamsObject[k].id;
        }
      }

      picksTableData.push(picksTableDataSingle);
    }

    res.status(200).json({
      pointsTableData: colObj,
      leaderBoardData: leaderBoardData,
      picksTableData: picksTableData,
    });
  });
};

async function fetchHTML(url) {
  const { data } = await axios.get(url);
  return cheerio.load(data);
}

module.exports.submitData = submitData;

module.exports.sayHello = sayHello;

module.exports.getGroupData = getGroupData;
