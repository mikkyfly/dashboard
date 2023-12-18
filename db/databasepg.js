const {Client} = require('pg');
const UPSdb = [];
const COMMdb =[];


const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "QWE123!",
  database: "test_db"
});

client.connect();

setInterval(function(){
    client.query(`SELECT value_state FROM test ORDER BY value_state DESC LIMIT 1`,(err,res)=>{ //DESC LIMIT 1
      if (!err) { 
        
        for (let i = 0; i < res.rows.length; i++) {
            UPSdb[i]= res.rows[i];            
        }
        var parseJsonUPS = JSON.stringify(res.rows);
        console.log(parseJsonUPS['value_state']);     
      }
      else{
        console.log(err.message);
      }
      client.end;
    })
  }
  ,1000);
  

/*
setInterval(function(){
  client.query(`SELECT value_state FROM test2 ORDER BY value_state`,(err,res)=>{
    if (!err) {
      for (let i = 0; i < res.rows.length; i++) {
         COMMdb[i]= res.rows[i];
      }
      var parseJsonCOMM = JSON.stringify(COMMdb);    
      console.log(parseJsonCOMM);
    }
    else{
      console.log(err.message);
    }
    client.end;
  })
}
,1000);*/