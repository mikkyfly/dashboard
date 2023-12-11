
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
    client.query(`SELECT value_state FROM test ORDER BY value_state `,(err,res)=>{ //DESC LIMIT 1
      if (!err) {
        
        for (let i = 0; i < res.rows.length; i++) {
            UPSdb[i]= res.rows[i];            
        }
        //var parseJsonUPS = JSON.stringify(UPSdb);
        //console.log(parseJsonUPS);         
      }
      else{
        console.log(err.message);
      }
      client.end;
    })
  }
  ,1000);
  


setInterval(function(){
  client.query(`SELECT value_state FROM test2 ORDER BY value_state`,(err,res)=>{
    if (!err) {
      for (let i = 0; i < res.rows.length; i++) {
         COMMdb[i]= res.rows[i];
      }
      //var parseJsonCOMM = JSON.stringify(COMMdb);    
      //console.log(parseJsonCOMM);
    }
    else{
      console.log(err.message);
    }
    client.end;
  })
}
,1000);

//websocket
wsServer.on('connection', onConnect);

function onConnect(wsClient) {
    console.log('Новый пользователь');
    wsClient.send('Привет Хьстон!');

    setInterval(function a(){
      wsClient.send(JSON.stringify(UPSdb));
      //wsClient.send(JSON.stringify(COMMdb));
    },2000);

    wsClient.on('close', function() {
        console.log('Пользователь отключился');
    });

    
    /*
    wsClient.on('message', function(message) {
        console.log(message);
        try {
            const jsonMessage = JSON.parse(message);
            switch (jsonMessage.action) {
                case 'ECHO':
                    wsClient.send(jsonMessage.data);
                    break;
                case 'PING':
                    setTimeout(function() {
                        wsClient.send('PONG');
                    }, 2000);
                    break;
                default:
                    console.log('Неизвестная команда');
                    break;
            }
        } catch (error) {
            console.log('Ошибка', error);
        }
    });*/
}

console.log('Сервер запущен на 8000 порту');