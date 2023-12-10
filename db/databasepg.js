const {Client} = require('pg');
const UPSdb = [];
const COMMdb =[];


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
      //function a(){UPSdb.push(res.rows);}   
      UPSdb[UPSdb.length] = res.rows;    
      console.log(UPSdb);         
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
      COMMdb[COMMdb.length] = res.rows;     
      console.log(COMMdb);
    }
    else{
      console.log(err.message);
    }
    client.end;
  })
}
,1000);
