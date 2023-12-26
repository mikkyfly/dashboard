
const WebSocket = require('ws');
const wsServer = new WebSocket.Server({ port: 8000 });
const {Client} = require('pg');
const UPSdb = [];
const COMMdb =[];


//connect database postgre SQL 
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
        
        //console.log(res.rows[0]["value_state"])
        for (let i = 0; i < res.rows.length; i++) {
            UPSdb[i]= res.rows[i];  
            //console.log("Пользователю отправлено: ", UPSdb[i]["value_state"]);      
        }
               
      }
      else{
        console.log(err.message);
      }
      client.end;
    })
  }
  ,1000);
  


// setInterval(function(){
//   client.query(`SELECT value_state FROM test2 ORDER BY value_state DESC LIMIT 1`,(err,res)=>{
//     if (!err) {
//       for (let i = 0; i < res.rows.length; i++) {
//          COMMdb[i]= res.rows[i];
//       }
//       //var parseJsonCOMM = JSON.stringify(COMMdb);    
//       //console.log(parseJsonCOMM);
//     }
//     else{
//       console.log(err.message);
//     }
//     client.end;
//   })
// }
// ,1000);

//websocket
wsServer.on('connection', onConnect);

function onConnect(wsClient) {
    console.log('Новый пользователь');
    setInterval(()=>{
      wsClient.send(JSON.stringify(UPSdb));
      //wsClient.send(JSON.stringify(COMMdb));
    },3000);
    

    wsClient.on('close', function() {
        console.log('Пользователь отключился');
    });
}

console.log('Сервер запущен на 8000 порту');