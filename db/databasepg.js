const {Client} = require('pg');

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "QWE123!",
  database: "test_bd"
});

client.connect();

setInterval(function(){
  client.query(`SELECT value_state FROM test ORDER BY value_state DESC LIMIT 1`,(err,res)=>{
    if (!err) {
      console.log(res.rows);
    }
    else{
      console.log(err.message);
    }
    client.end;
  })
}
,1000);

setInterval(function(){
  client.query(`SELECT value_state FROM test_2 ORDER BY value_state DESC LIMIT 1`,(err,res)=>{
    if (!err) {
      console.log(res.rows);
    }
    else{
      console.log(err.message);
    }
    client.end;
  })
}
,1000);
