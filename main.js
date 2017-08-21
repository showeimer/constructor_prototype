function LivingBeing(name) {
  this.name = name;
}

// Dog Constructor & Prototype
function Dog (status, color, hungry, owner) {
  // this.name = name;
  this.status = status || 'normal';
  this.color = color;
  this.hungry = hungry;
  this.owner = owner;
}

// Human Constructor & Prototype
function Human (cool) {
  // this.name = name;
  this.pet = function(dog) {
    dog.status = 'happy';
  }
  this.feed = function(dog) {
    dog.hungry = false;
  }
  this.cool = cool || false;
}

// ============================================

let sadie = new Dog('normal', 'black', false);
sadie.prototype = new LivingBeing('Sadie');
let moonshine = new Dog('normal', 'blue', true);
moonshine.prototype = new LivingBeing('Moonshine');
let atticus = new Dog()
atticus.prototype = new LivingBeing('Atticus');

let mason = new Human(false);
mason.prototype = new LivingBeing('Mason');
let julia = new Human(true);
julia.prototype = new LivingBeing('Julia')

sadie.owner = mason;
