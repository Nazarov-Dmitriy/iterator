// TODO: write your code here
export default class Team {
  constructor() {
    this.team = {
      Bowman: {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
      },
      Demon: {
        name: 'Демон',
        type: 'Demon',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
      }
    };
  }

  [Symbol.iterator]() {
    const entries = Object.entries(this);
    let index = -1;

    return {
      next() {
        index++;

        return {
          value: entries[index],
          done: index >= entries.length
        }
      }
    }
  }
}

let a  = new Team();
for (let person of a){
    console.log(person[1]);
}
