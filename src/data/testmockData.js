//import { mockLineData as data } from "./mockData";

const {Client} = require('pg');
const UPSdb = [];
const COMMdb =[];
import { mockLineData as data } from '../src/data/mockData';

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "QWE123!",
  database: "test_db"
});

client.connect();



setInterval(function(){
    client.query(`SELECT value_state FROM test ORDER BY value_state `,(err,res)=>{ //DESC LIMIT 1
      if (!err) {
       
        for (let i = 0; i < res.rows.length; i++) {
          //console.log(res.rows[i]['value_state']);
          data[i].x=res.rows[i]['value_state'];
        }


        /*for (let i = 0; i < res.rows.length; i++) {
            UPSdb[i]= res.rows[i];            
        }
        var parseJsonUPS = JSON.stringify(UPSdb);
        console.log(parseJsonUPS);*/         
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









