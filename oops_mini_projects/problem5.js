function main() {
    // Create Character constructor function
    function Character(health, strength, agility) {
        this.health = health;
        this.strength = strength;
        this.agility = agility;
    }

    // Create Warrior constructor function inheriting Character
    function Warrior(health, strength, agility, weaponType) {
        Character.call(this, health, strength, agility); // Call the Character constructor
        this.weaponType = weaponType;
    }
    Warrior.prototype = Object.create(Character.prototype);
    Warrior.prototype.constructor = Warrior;

    // Create Mage constructor function inheriting Character
    function Mage(health, strength, agility, spellType) {
        Character.call(this, health, strength, agility); // Call the Character constructor
        this.spellType = spellType;
    }
    Mage.prototype = Object.create(Character.prototype);
    Mage.prototype.constructor = Mage;

    // Create Archer constructor function inheriting Character
    function Archer(health, strength, agility, arrowType) {
        Character.call(this, health, strength, agility); // Call the Character constructor
        this.arrowType = arrowType;
    }
    Archer.prototype = Object.create(Character.prototype);
    Archer.prototype.constructor = Archer;

    // Create Hero constructor function inheriting Warrior and Mage
    function Hero(health, strength, agility, weaponType, spellType, specialAbility) {
        Warrior.call(this, health, strength, agility, weaponType); // Call the Warrior constructor
        Mage.call(this, health, strength, agility, spellType); // Call the Mage constructor
        this.specialAbility = specialAbility;
    }
    Hero.prototype = Object.create(Warrior.prototype);
    Hero.prototype.constructor = Hero;

    // Create Enemy constructor function inheriting Character
    function Enemy(health, strength, agility, enemyType) {
        Character.call(this, health, strength, agility); // Call the Character constructor
        this.enemyType = enemyType;
    }
    Enemy.prototype = Object.create(Character.prototype);
    Enemy.prototype.constructor = Enemy;

    // Usage
    let warrior1 = new Warrior(100, 50, 30, "sword");
    let mage1 = new Mage(80, 20, 50, "fireball");
    let archer1 = new Archer(90, 40, 40, "poison");
    let hero1 = new Hero(120, 60, 40, "axe", "ice", "double damage");
    let enemy1 = new Enemy(200, 80, 20, "goblin");

    console.log(warrior1);
    console.log(mage1);
    console.log(archer1);
    console.log(hero1);
    console.log(enemy1);

    return { Character, Hero, Warrior, Mage, Archer, Enemy };
}

main();
