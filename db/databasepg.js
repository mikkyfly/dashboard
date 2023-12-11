const {Client} = require('pg');
const UPSdb = [];
const COMMdb =[];


const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "QWE123!",
<<<<<<< HEAD
  database: "test_db"
=======
  database: "test_bd"
>>>>>>> ef6e93ec6e03582f72639b7910ed186d1c4e6cb0
});

client.connect();



setInterval(function(){
<<<<<<< HEAD
    client.query(`SELECT value_state FROM test ORDER BY value_state `,(err,res)=>{ //DESC LIMIT 1
      if (!err) { 
        
        for (let i = 0; i < res.rows.length; i++) {
            UPSdb[i]= res.rows[i];            
        }
        var parseJsonUPS = JSON.stringify(UPSdb);
        console.log(parseJsonUPS);     
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
=======
  client.query(`SELECT value_state FROM test ORDER BY value_state DESC LIMIT 1`,(err,res)=>{
    if (!err) {     
      //function a(){UPSdb.push(res.rows);}   
      UPSdb[UPSdb.length] = res.rows;    
      console.log(UPSdb);         
>>>>>>> ef6e93ec6e03582f72639b7910ed186d1c4e6cb0
    }
    else{
      console.log(err.message);
    }
    client.end;
  })
}
<<<<<<< HEAD
,1000);*/
=======
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
>>>>>>> ef6e93ec6e03582f72639b7910ed186d1c4e6cb0
