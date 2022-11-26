import { action, makeObservable, observable } from "mobx";

class Athlete {
  salary: number;
  name: string;
  age: number;
  teamHistory: string[];

  constructor(name: string, age: number, salary: number) {
    this.salary = salary;
    this.name = name;
    this.age = age;
    this.teamHistory = [];

    makeObservable(this, {
      //make list of annotations we want to define
      salary: true,
      tradePlayer: action,
      wishHappyBirthday: action,
      name: observable,
      age: observable,
      teamHistory: true, //trusting mobx to define (will definitely mark as observable)
    });
  }
  wishHappyBirthday() {
    this.age++;
  }

  tradePlayer(team: string) {
    this.teamHistory.push(team);
  }
}

export default Athlete;
