var timerID=null;
var interval=100;

self.onmessage=function(e){
	if (e.data=="start") {
		postMessage("Starting master beater");
		timerID=setInterval(function(){postMessage("tick");},interval)
	}
	else if (e.data.interval) {
		postMessage("Setting master beater interval");
		interval=e.data.interval;
		postMessage("Interval set to = " + interval + " ms");
		if (timerID) {
			clearInterval(timerID);
			timerID=setInterval(function(){postMessage("tick");},interval)
		}
	}
	else if (e.data=="stop") {
		postMessage("Stopping master beater");
		clearInterval(timerID);
		timerID=null;
	}
};

postMessage('Master Beater Initialized Successfully');
