// Create Enums + Function Here

let insaneLevel = (num: number): number => Game.Hard - num;

enum Game {
    Easy =100 ,
    Medium =  Easy - 20,
    Hard =  Medium - (Easy / 2),
    Insane = insaneLevel(10),
}


// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80 (Easy - 20)
console.log(Game.Hard); // 30   (Medium - (Easy / 2))
console.log(Game.Insane); // 20  (hard - p)