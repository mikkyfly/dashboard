import { tokens } from "../theme";


const myWs = new WebSocket('ws://localhost:8000');
// обработчик проинформирует в консоль когда соединение установится
myWs.onopen = function () {
    console.log('подключился');
};
// обработчик сообщений от сервера
myWs.onmessage = function (message) {
<<<<<<< HEAD
    const jsonParse = JSON.parse(message.data);  
    
    try {   
      
      let temp = {x:setInterval((counter) =>{
        if(mockLineData[0].data.length === 50){
          mockLineData[0].data.shift();
          counter++
        }
        else{
          counter++
        }
      }, 6000), y:jsonParse[0]['value_state']};
      mockLineData[0].data.push(temp);
      console.log(mockLineData[0].data);

=======
    const jsonParse = JSON.parse(message.data);
    
    try {    

        for (let i = 0; i < jsonParse.length; i++) {
       
          mockLineData[i].data[i].y = jsonParse[i]['value_state'];
          mockLineData[i].data[i].x = i;
          //console.log(mockLineData[i].data[i].y);              
        }       
>>>>>>> parent of 725797e (new)
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
        x: 0, //"plane"
        y: 1,
      },
      
    ],
  },
];