var WebSocket = require('ws');
// these are the command sent in startup script
// wait is a command used only by this script it is not sent to the device.
// more information on: https://github.com/crazycoder1999/Vysor.IO_BOT
var setupCmd = [
	'{ type: "home"}',
	'{ type: "keychar", keychar: " "}',
	'{ type: "keychar", keychar: "c"}',
	'{ type: "keychar", keychar: "l"}',
	'{ type: "keychar", keychar: "a"}',
	'{ type: "keychar", keychar: "s"}',
	'{ type: "keychar", keychar: "h"}',
	'{ type: "keychar", keychar: " "}',
	'{ type: "keychar", keychar: "o"}',
	'{ type: "keychar", keychar: "f"}',
	'{ type: "keychar", keychar: " "}',
	'{ type: "keychar", keychar: "c"}',
	'{ type: "keychar", keychar: "l"}',
	'{ type: "keychar", keychar: "a"}',
	'{ type: "keychar", keychar: "n"}',
	'{ type: "keychar", keychar: "s"}',
	'{ type: "down"}',
	'{ type: "down"}',
	'{ type: "down"}',
	'{ type: "down"}',
	'{ type: "keychar", keychar: "\n"}',
	'wait',
	'wait',
	'wait',
	'wait',
	'wait',
	'wait',
	'wait',
];

var cmds = setupCmd;

var cmdIdx = 0;

var ws = new WebSocket('ws://127.0.0.1:53516/input',"mirror-protocol", {
  protocolVersion: 8, 
  origin: 'http://websocket.org'
});
 
ws.on('open', function open() {
	console.log('connected');
});
 
ws.on('close', function close() {
	console.log('disconnected');
});
 
ws.on('message', function message(data, flags) {
	console.log('Received msg: '+data);
});

started = 0;
step = 600.0;
firstSeq = 0;
setTimeout(everytime, 800);

function everytime() {
	if( cmdIdx < cmds.length ) { //this is used only when the program is launched
		if( cmds[cmdIdx] === 'wait' ) {
			console.log("waiting...");
			cmdIdx++;
			setTimeout(everytime, 800);
			return;
		}		
		ws.send(cmds[cmdIdx], {mask: true});
		console.log("Sent: " + cmds[cmdIdx] );
		cmdIdx++;
		setTimeout(everytime, 800);
	} else { //this is the sequence to simulate swype on the screen.
			if(started === 0) {
				c = '{ type: "mousedown", clientX:'+step+', clientY: '+step+'}';
				ws.send(c);
				started = 1;
			}
			c = '{ type: "mousemove", clientX:'+step+', clientY: '+step+'}';
			console.log(c);
			ws.send(c);
			tmo = 30;
			if(firstSeq === 0) {
				step += 20.0;
				if(step > 1000 ) {
					firstSeq = 1;
					started = 0;
					tmo = 2000;
				}
			} else {
				step -= 20.0;
				if( step < 600 ) {
					firstSeq = 0;
					started = 0;
					tmo = 2000;
				}
			}

			setTimeout(everytime, tmo);
	} 
}
