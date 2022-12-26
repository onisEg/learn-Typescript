(function () {
    function yesOrNo(val) {
        if (typeof val === "string") {
            return "Error";
        }
        else {
            return val > 10 ? "true" : "false";
        }
    }
    console.log(yesOrNo(100)); // True
    console.log(yesOrNo("100")); // error
    console.log(yesOrNo(8)); // False
})();
