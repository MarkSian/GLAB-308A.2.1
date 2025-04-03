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

//Part 2 Class Fantasy
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

//the whole party rolls
console.log("----The party rolls for initiative or something-----");
robin.roll();
robin.companion.roll();
robin.companion.companion.roll();

console.log("----The party's inventory-----");
console.log(`The party's current inventory is Robins's ${robin.inventory} and Frank's ${robin.companion.companion.inventory}`);
console.log(`The party's current inventory is Robin's: ${robin.inventory.join(", ")} and Frank's: ${robin.companion.companion.inventory.join(", ")}.`);

//Part 3 Class Features3
class Adventurer extends Character {
    constructor(name, role) {
        super(name); // the super() method calls the constructor of the parent class (Character).
        // Adventurers have specialized roles.
        this.role = role;
        this.level = 1; // Adventurers start at level 1.
        this.experience = 0; // Adventurers start with 0 experience points.
        this.equipment = {
            weapon: "short sword",
            armor: "leather armor"
        }; // Adventurers start with a short sword and leather armor.
        this.skills = ["stab", "dodge"]; // Adventurers start with basic skills.
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins"); // inventory is an array, so we can use the push method to add the bedroll and gold.
    }
    // Adventurers have the ability to scout ahead of them.
    // this scout method will log a message that calls the roll method from the parent class and gives us a dice roll.
    // this method will be available to all adventurers.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}