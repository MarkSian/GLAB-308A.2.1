// Part 1
// 1) ##Create a loop that logs each item in Robin's inventory
// We can accss Robin's inventory using a combination of dot notation and a square bracket syntax.
// For example: we could find a sword at adventurer.inventory[0]

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
}

for (let i = 0; i < adventurer.inventory.length; i++) {
    console.log(adventurer.inventory[i]);
}
