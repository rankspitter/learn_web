onmessage = function(event) {  
    if (event.data === 'getTimeAndDate') {
        this.setInterval(function() {
            let now = new Date();
            let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            self.postMessage({now, color});
        }, 1000);
    }
};


