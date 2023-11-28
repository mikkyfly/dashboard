const HOST = "127.0.0.1";
const PORT = "8000";

const API_URL = `ws://${HOST}:${PORT}/`;

const socket = new WebSocket(API_URL);

const cells = {};
const celles = [];

socket.onopen = event => {
    console.log('Open connect');
    socket.send('Hi server');
};
socket.onmessage = function (event) {
    const data = JSON.parse(event.data);
  
    const cell = cells[data.cell];
  
    cell.value = data.value;

    console.log(cell.value);
};

socket.onclose = event => {
    console.log('Close connect');
};

socket.onerror = event => {
    console.log('onerror');
};