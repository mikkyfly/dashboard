
const WebSocket = require('ws');
const wsServer = new WebSocket.Server({ port: 8000 });
const {Client} = require('pg');
const UPSdb = [];
const COMMdb =[];

//Database Postgre SQL

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
        //console.log(UPSdb);
            
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
        //console.log(COMMdb);
      }
      else{
        console.log(err.message);
      }
      client.end;
    })
  }
  ,1000);
  


/*WebSocket */
wsServer.on('connection', onConnect);

function onConnect(wsClient) {
    console.log('Новый пользователь');
    wsClient.send('Привет Хьстон!');
    
    wsClient.send(UPSdb);
    //wsClient.send(COMMdb);
    
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