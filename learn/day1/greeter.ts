class User {
  fullName: string;
  firstName: string;
  lastName: string;
  constructor(firstname: string, lastName: string) {
    this.firstName = firstname;
    this.lastName = lastName;
    this.fullName = firstname + "" + lastName;
  }
}
// 定义接口 可以理解为对某一个对象的描述
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello" + person.firstName + " " + person.lastName;
}

let user: Person = {
  firstName: "hhh",
  lastName: "kkkk"
};
new User("1", "2");
console.log(greeter(user));
