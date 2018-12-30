var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
{
    var rnd = function rnd(a) {
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (b === null) {;
            var _ref = [0, a];
            a = _ref[0];
            b = _ref[1];
        }
        return Math.random() * (b - a) + a;
    };

    var loop = function loop() {
        Bubble.update();
        requestAnimationFrame(loop);
    };

    var svg = document.querySelector("svg");

    var Bubble = function () {
        _createClass(Bubble, null, [{
            key: "create",
            value: function create() {
                var bubble = void 0;
                if (Bubble.trash.size > 0) {
                    bubble = Bubble.trash.values().next().value;
                    Bubble.trash.delete(bubble);
                } else {
                    bubble = new Bubble();
                }
                return bubble.init();
            }
        }]);

        function Bubble() {
            _classCallCheck(this, Bubble);

            this.elm = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            this.data = {};
        }

        _createClass(Bubble, [{
            key: "init",
            value: function init() {
                Bubble.count++;
                Bubble.actives.add(this);
                svg.appendChild(this.elm);
                this.birth = Bubble.count * Bubble.freq + Bubble.birth;
                //this.birth = Date.now();
                this.data.age = 0;
                this.data.x = rnd(window.innerWidth);
                //this.data.x = (Bubble.count * 10) % window.innerWidth;
                this.data.r = rnd(10, 30);
                //this.data.hue = rnd(360);
                this.data.hue = Bubble.count;
                this.data.speed = rnd(100, 300);
                this.elm.setAttribute("cx", this.data.x);
                this.data.life = rnd(1, 3);
                this.draw();
                return this;
            }
        }, {
            key: "draw",
            value: function draw() {
                var life = this.data.age / this.data.life;
                if (life >= 1) return this.delete();

                this.elm.setAttribute("cy", window.innerHeight - this.data.age * this.data.speed);
                this.elm.setAttribute("r", this.data.r * life * life);
                this.elm.setAttribute("stroke", "hsl(" + this.data.hue + ", 100%, " + Math.floor(100 * (1 - life)) + "%)");
                return this;
            }
        }, {
            key: "delete",
            value: function _delete() {
                Bubble.actives.delete(this);
                Bubble.trash.add(this);
                this.elm.remove();
                return this;
            }
        }, {
            key: "update",
            value: function update() {
                this.data.age = (Bubble.time - this.birth) / 1000;
                this.draw();
            }
        }], [{
            key: "update",
            value: function update() {
                Bubble.time = Date.now();
                Bubble.age = Bubble.time - Bubble.birth;
                while (Bubble.age / Bubble.freq > Bubble.count) {
                    Bubble.create();
                }
                Bubble.actives.forEach(function (b) {
                    return b.update();
                });
            }
        }]);

        return Bubble;
    }();

    Bubble.freq = 100;
    Bubble.birth = Date.now();
    Bubble.time = 2;
    Bubble.trash = new Set();
    Bubble.actives = new Set();
    Bubble.count = 0;
    loop();
    Bubble.create();
}
