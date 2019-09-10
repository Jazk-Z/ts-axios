var User = /** @class */ (function () {
    function User(firstname, lastName) {
        this.firstName = firstname;
        this.lastName = lastName;
        this.fullName = firstname + "" + lastName;
    }
    return User;
}());
function greeter(person) {
    return "Hello" + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "hhh",
    lastName: "kkkk"
};
new User("1", "2");
console.log(greeter(user));
