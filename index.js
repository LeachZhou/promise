/**
 * 手写一个promise
 */
function Promise(fn) {
    //需要一个成功时的回调
    var doneCallback;
    //一个实例的方法，用来注册异步事件
    this.then = function (done) {
        doneCallback = done;
    }

    function resolve() {
        doneCallback();
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