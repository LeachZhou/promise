/**
 * 手写一个promise
 */
function Promise(fn) {
    var value = null,
        callbacks = [];  //callbacks为数组，因为可能同时有很多个回调

    this.then = function (onFulfilled) {
        callbacks.push(onFulfilled);
    };

    function resolve(value) {
        callbacks.forEach(function (callback) {
            callback(value);
        });
    }

    fn(resolve);
}

/**
 * 实例初始化
 */
function init() {
    var p = new Promise(function (resolve) {
        setTimeout(resolve, 100);
    });
    p.then(function () {
        console.log('success')
    });
}

// init();