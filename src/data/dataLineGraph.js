import { tokens } from "../theme";


const myWs = new WebSocket('ws://localhost:8000');
// обработчик проинформирует в консоль когда соединение установится
myWs.onopen = function () {
    console.log('подключился');
};

// обработчик сообщений от сервера
myWs.onmessage = function (message) {
    const jsonParse = JSON.parse(message.data);      
    try {   
      
      let temp = {x:setInterval((counter) =>{
        if(mockLineData[0].data.length >= 50){
          mockLineData[0].data.shift();
          counter++
        }
        else{
          counter++
        }
      }, 3000), y:jsonParse[0]['value_state']};
      mockLineData[0].data.push(temp);
      console.log(mockLineData[0].data);

    } catch (error) {
        console.log('Error: ', error);
    }
};




export const mockLineData = [
  {
    id: "ИБП Uвх",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: 0,
        y: 0
      },
      
    ],
  },
];