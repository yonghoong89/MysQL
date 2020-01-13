var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',//같은저장소
  user     : 'root',
  password : '111111',
  database : 'opentutorials'
});
 
connection.connect();//접속이될것이다
 
//접속이 끝난 후
connection.query('SELECT * FROM topic', function (error, results, fields) { 
  if (error) {
      console.log(error)
  };
  console.log(results);
});
 
connection.end();
