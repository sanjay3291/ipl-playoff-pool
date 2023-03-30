var cheerio = require("cheerio");
var axios = require("axios");
var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-1",
});

const sayHello = (req, res, next) => {
  res.status(200).json({
    body: "Hello from the server!",
  });
};

const submitData = (req, res, next) => {
  const userData = req.body;
  const timestamp = Date.now();
  userData.timestamp = timestamp;

  var docClient = new AWS.DynamoDB.DocumentClient();

  var table = "iplplayoffpool2023prod";

  var params = {
    TableName: table,
    Item: userData,
  };

  docClient.put(params, function (err, data) {
    if (err) {
      console.error(
        "Unable to add item. Error JSON:",
        JSON.stringify(err, null, 2)
      );
    }
  });

  res.status(200).json({
    status: "Success",
    timestamp: userData.timestamp,
    username: userData.username,
    groupname: userData.groupname,
    order: userData.teamsObject,
  });
};

pointsTableData = [];

const getPointsTableData = async (req, res) => {
  colObj = [];
  try {
    const $ = await fetchHTML(
      "https://www.cricbuzz.com/cricket-series/5945/indian-premier-league-2023/points-table"
    );

    for (var i = 0; i < 10; i++) {
      var rowObj = new Object();
      let table = $(
        "#page-wrapper > div:nth-child(7) > div.cb-col-67.cb-col.cb-left.cb-hm-rght > table > tbody",
        $.html()
      );
      rowObj.rank = i + 1;
      rowObj.teamName =
      table[0].children[2 * i].children[0].children[0].children[0].children[1].children[0].data;
      rowObj.M = table[0].children[2 * i].children[1].children[0].data;
      rowObj.W = table[0].children[2 * i].children[2].children[0].data;
      rowObj.L = table[0].children[2 * i].children[3].children[0].data;
      rowObj.NR = table[0].children[2 * i].children[5].children[0].data;
      rowObj.PT = table[0].children[2 * i].children[6].children[0].data;
      rowObj.NRR = table[0].children[2 * i].children[7].children[0].data;
      colObj.push(rowObj);
    }
    if (res !== undefined) {
      res.status(200).json({
        pointsTableData: colObj,
      });
    }
    return colObj;
  } catch (err) {
    console.error(err);
  }
};

(async () => {
  pointsTableData = await getPointsTableData();
})();

async function fetchHTML(url) {
  const { data } = await axios.get(url);
  return cheerio.load(data);
}

const getGroupData = async (req, res, next) => {
  groupName = req.query.groupName;
  picksTableData = [];
  var docClient = new AWS.DynamoDB.DocumentClient();

  var params = {
    TableName: "iplplayoffpool2023prod",
    KeyConditionExpression: "#gn = :xyz",
    ExpressionAttributeNames: {
      "#gn": "groupname",
    },
    ExpressionAttributeValues: {
      ":xyz": groupName,
    },
  };

  docClient.query(params, function (err, data) {
    if (err) {
      console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
      leaderBoardData = [];
      data.Items.forEach(function (item) {
        points = 0;
        username = item.username;
        for (var j = 0; j < 4; j++) {
          if (pointsTableData[j].teamName == "Chennai Super Kings") {
            for (var k = 0; k < item.teamsObject.length; k++) {
              if (item.teamsObject[k].team === "CSK") {
                points = points + item.teamsObject[k].id;
              }
            }
          } else if (pointsTableData[j].teamName == "Delhi Capitals") {
            for (var k = 0; k < item.teamsObject.length; k++) {
              if (item.teamsObject[k].team === "DC") {
                points = points + item.teamsObject[k].id;
              }
            }
          } else if (pointsTableData[j].teamName == "Gujarat Titans") {
            for (var k = 0; k < item.teamsObject.length; k++) {
              if (item.teamsObject[k].team === "GT") {
                points = points + item.teamsObject[k].id;
              }
            }
          } else if (pointsTableData[j].teamName == "Kolkata Knight Riders") {
            for (var k = 0; k < item.teamsObject.length; k++) {
              if (item.teamsObject[k].team === "KKR") {
                points = points + item.teamsObject[k].id;
              }
            }
          } else if (pointsTableData[j].teamName == "Lucknow Super Giants") {
            for (var k = 0; k < item.teamsObject.length; k++) {
              if (item.teamsObject[k].team === "LSG") {
                points = points + item.teamsObject[k].id;
              }
            }
          } else if (pointsTableData[j].teamName == "Mumbai Indians") {
            for (var k = 0; k < item.teamsObject.length; k++) {
              if (item.teamsObject[k].team === "MI") {
                points = points + item.teamsObject[k].id;
              }
            }
          } else if (pointsTableData[j].teamName == "Punjab Kings") {
            for (var k = 0; k < item.teamsObject.length; k++) {
              if (item.teamsObject[k].team === "PBKS") {
                points = points + item.teamsObject[k].id;
              }
            }
          } else if (
            pointsTableData[j].teamName == "Royal Challengers Bangalore"
          ) {
            for (var k = 0; k < item.teamsObject.length; k++) {
              if (item.teamsObject[k].team === "RCB") {
                points = points + item.teamsObject[k].id;
              }
            }
          } else if (pointsTableData[j].teamName == "Rajasthan Royals") {
            for (var k = 0; k < item.teamsObject.length; k++) {
              if (item.teamsObject[k].team === "RR") {
                points = points + item.teamsObject[k].id;
              }
            }
          } else if (pointsTableData[j].teamName == "Sunrisers Hyderabad") {
            for (var k = 0; k < item.teamsObject.length; k++) {
              if (item.teamsObject[k].team === "SRH") {
                points = points + item.teamsObject[k].id;
              }
            }
          }
        }
        leaderBoardDataSingle = {
          username: username,
          points: points,
        };
        leaderBoardData.push(leaderBoardDataSingle);
      });

      leaderBoardData.sort(function (a, b) {
        var x = a.points > b.points ? -1 : 1;
        return x;
      });
      for (var i = 0; i < leaderBoardData.length; i++) {
        leaderBoardData[i].rank = i + 1;
      }

      data.Items.forEach(function (item) {
        picksTableDataSingle = {};
        picksTableDataSingle.username = item.username;
        picksTableDataSingle.pointsArray = [];
        for (var k = 0; k < item.teamsObject.length; k++) {
          if (item.teamsObject[k].team === "CSK") {
            picksTableDataSingle.pointsArray[0] = item.teamsObject[k].id;
          } else if (item.teamsObject[k].team === "DC") {
            picksTableDataSingle.pointsArray[1] = item.teamsObject[k].id;
          } else if (item.teamsObject[k].team === "GT") {
            picksTableDataSingle.pointsArray[2] = item.teamsObject[k].id;
          } else if (item.teamsObject[k].team === "KKR") {
            picksTableDataSingle.pointsArray[3] = item.teamsObject[k].id;
          } else if (item.teamsObject[k].team === "LSG") {
            picksTableDataSingle.pointsArray[4] = item.teamsObject[k].id;
          } else if (item.teamsObject[k].team === "MI") {
            picksTableDataSingle.pointsArray[5] = item.teamsObject[k].id;
          } else if (item.teamsObject[k].team === "PBKS") {
            picksTableDataSingle.pointsArray[6] = item.teamsObject[k].id;
          } else if (item.teamsObject[k].team === "RCB") {
            picksTableDataSingle.pointsArray[7] = item.teamsObject[k].id;
          } else if (item.teamsObject[k].team === "RR") {
            picksTableDataSingle.pointsArray[8] = item.teamsObject[k].id;
          } else if (item.teamsObject[k].team === "SRH") {
            picksTableDataSingle.pointsArray[9] = item.teamsObject[k].id;
          }
        }

        picksTableData.push(picksTableDataSingle);
      });

      res.status(200).json({
        leaderBoardData: leaderBoardData,
        picksTableData: picksTableData,
      });
    }
  });
};

module.exports.submitData = submitData;

module.exports.sayHello = sayHello;

module.exports.getGroupData = getGroupData;

module.exports.getPointsTableData = getPointsTableData;


//Code to scrape points table from Cricinfo website.
//"#main-container > div > div.series-standings-page-wrapper > div > div:nth-child(2) > div > div > div > table > tbody"
/*rowObj.rank =
        table[0].children[
          i
        ].children[0].children[0].children[0].children[0].data;
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
      rowObj.NRR = table[0].children[i].children[6].children[0].data;*/
