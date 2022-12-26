// Create Enums + Function Here
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = (function () {
        return Game.Easy - 20;
    })()] = "Medium";
    Game[Game["Hard"] = (function () {
        return Game.Medium - (Game.Easy / 2);
    })()] = "Hard";
    Game[Game["Insane"] = (function () {
        return Game.Hard - 10;
    })()] = "Insane";
})(Game || (Game = {}));
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80 (Easy - 20)
console.log(Game.Hard); // 30   (Medium - (Easy / 2))
console.log(Game.Insane); // 20  (hard - p)
