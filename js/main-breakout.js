function breakOutCoundown() {
    //var dateEnd = '2022/02/21' + ' 9:46:00';
    var dateEnd = '2022/02/22' + ' 18:00:00';
    var today = new Date();

    var timeNow = today.getTime(),
        timeEnd = Date.parse(dateEnd),
        timeClock = timeEnd - timeNow;

    if (timeClock > 0) {
        var deadline = new Date(Date.parse(new Date()) + timeClock);
        var clock = new Clock(deadline, function () {
        });
        document.querySelector('.clock').appendChild(clock.el);
    } else {
        document.querySelector('.breakout__time').classList.add('hide');
    }

}


// Page Ready
(function () {
    breakOutCoundown();
})();
  
  