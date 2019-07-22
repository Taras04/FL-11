const hundred= 100;
const half= 0.5;
class Fighter {
    constructor({ name: name, damage: damage, hp: hp, agility: agility }) {
      this._name = name;
      this._damage = damage;
      this._hp = hp;
      this._agility = agility;
      this._wins = 0;
      this._losses = 0;
    }
    getName() {
      return this._name;
    }
  
    getDamage() {
      return this._damage;
    }
  
    getHealth() {
      return this._hp;
    }
  
    getAgility() {
      return this._agility;
    }
   
    attack(fighter) {
      const doAttackSuccess = () => {        
        const chance = -fighter._agility + hundred;
        const event = +Math.random() * hundred;
        return chance >= event;
      }
      const eventDamage = damage => {
        fighter._hp = fighter.getHealth() - damage;
        fighter._hp < 0 ? fighter._hp = 0 : fighter._hp;
        return fighter._hp;
      }
  
      if (doAttackSuccess()) {
        eventDamage(this.getDamage());
        return `${this.getName()} makes ${this.getDamage()} damage to ${fighter.getName()},
        now ${fighter.getName()}'s healths is ${fighter.getHealth()}`;
      } else {
        return `${this.getName()} attack missed`;
      }
    }
  
    history() {
      return `Name: ${this.getName()}, Wins: ${this.wins}, Losses: ${this.losses}`;
    }
  
    health(points) {
      if (this.getHealth() + points > hundred) {
        this._hp = hundred;
      }
      return this._hp;
    }
    
    addWin() {
      this.wins += 1;
      return this._name + ' Winner';
    }
  
    addLoss() {
      this.losses += 1;
      return this._name + ' Loser';
    }
  }
    
  const battle = (fighter1, fighter2) => {
    const first = () => {
      return Math.random() > half ? fighter2 : fighter1;
    }
  
    const second = () => {
      return first() === fighter1 ? fighter1 : fighter2;
    }
  
    let f = first();
    let s = second();
  
    console.log(first());
    console.log(second());
     
    while (f._hp > 0 || s._hp > 0) {
      f.attack(s);
      s.attack(f);
    }
  
  return 'end';
  }
 
  
  
