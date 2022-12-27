(function () {
    var Show = /** @class */ (function () {
        function Show(_title) {
            this._title = _title;
        }
        Object.defineProperty(Show.prototype, "title", {
            get: function () {
                return this._title;
            },
            set: function (value) {
                this._title = value;
            },
            enumerable: false,
            configurable: true
        });
        return Show;
    }());
    var tester = new Show("Elzero");
    console.log(tester.title); // Property 'title' does not exist on type 'Show'
    tester.title = "Osama"; // Property 'title' does not exist on type 'Show'
    console.log(tester.title); // Property 'title' does not exist on type 'Show'
})();
