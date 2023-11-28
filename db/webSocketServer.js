const ws = require("ws");
const fs = require("fs");
const http = require("http");

const HOST = "127.0.0.1";
const PORT = "8000";
const server = http.createServer((req,res) => {
    res.writeHead(200);
    res.end(index);
});


//Запуск сервера и соединение с клиентом. Вывод логов 
server.listen(PORT,HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});

const socketServer = new ws.WebSocketServer({server});
const messages =[];

//логика взаимодействия
/*
  Класс WebSocketServer имеет метод on, позволяющий погрузиться
  внутрь жизненного цикла клиентского соединения и производить обработку
  каких-либо событий.
*/
wss.on("connection", (websocketConnection, req) => {
    const ip = req.socket.remoteAddress;
    console.log(`[open] Connected ${ip}`);

    broadcastMessages(messages, websocketConnection);

    websocketConnection.on("message", (message) => {
        console.log("[message] Received: " + message);

        messages.push(message);

        broadcastMessage(message, websocketConnection);
    });
    


    //Обработка отключения клиентa. 
    //При отключении клиента будем выводить в логи его ip-адрес.
    websocketConnection.on("close", () => {
        console.log(`[close] Disconnected ${ip}`);
    });
});

//Функция рассылки истории сообщений
function broadcastMessages(messages, client) {
    messages.forEach((message) => {
        if (client.readyState === ws.OPEN) {
            client.send(message, { binary: false });
        }
    });
}

//Функция рассылки нового сообщения
function broadcastMessage(message, websocketConnection) {
    wss.clients.forEach((client) => {
        if (client.readyState === ws.OPEN && client !== websocketConnection) {
            client.send(message, { binary: false });
        }
    });
}