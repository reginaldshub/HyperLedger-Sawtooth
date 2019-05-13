const WEBSOCKET_URL = 'ws://localhost:8008/subscriptions';
const WebSocket = require('ws');
var atob = require('atob');
// 'ws:localhost:8008/subscriptions'
var isWebSocketStart = false;
const initWebSocket = (prefix, cb) => {
    let ws = new WebSocket(WEBSOCKET_URL);
    ws.onopen = () => {
        ws.send(
            JSON.stringify({
                action: 'subscribe',
                address_prefixes: [prefix]
            })
        );
    };
    ws.onmessage = message => {
        const data = JSON.parse(message.data);
        var allState = data.state_changes;
        if (isWebSocketStart && allState.length) {
            handleWebsocketResponse(allState);
            console.log(JSON.parse(atob(allState)))
        }
        isWebSocketStart = true;
    };
    ws.onclose = e => {
        console.log(e);
    };

    ws.onerror = e => {
        console.log(e);
    };
};

const handleWebsocketResponse = allStateData => {
    console.log('web socket received ', allStateData);
    allStateData.forEach(data => {
        if (data.value) {
            const parsed = JSON.parse(atob(data.value));
            console.log("parsed", parsed)
            // if (parsed.owner === app.user.public) {
            //   constructTabhtml(parsed);
            // }
        } else if (data.type == 'DELETE') {
            console.log(data);
        }
    });
};

module.exports = { initWebSocket };