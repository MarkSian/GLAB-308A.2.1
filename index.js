// Part 1
// 1) ##Create a loop that logs each item in Robin's inventory
// We can accss Robin's inventory using a combination of dot notation and a square bracket syntax.
// For example: we could find a sword at adventurer.inventory[0]

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"]
// }


const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
        },

    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
};

adventurer.roll();
// the parameter mod is default to 0. Changing that will add to the number rolled.
adventurer.roll(5);
// I know this adds as I can get a roll outside of the 1-20 range.

for (let i = 0; i < adventurer.inventory.length; i++) {
    console.log(adventurer.inventory[i]);
}

