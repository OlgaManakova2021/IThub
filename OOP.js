/ Свойство объектов. Ключ + значение

let user = {
    name: "Вася",
    age: 30,
    "likes javascript": true,
    address: {
        city: "Ростов-на-Дону",
        street: "пл. Гагарина",
    }
};

console.log(user);
console.log(user.name);
console.log(user["likes javascript"]);
console.log(user.address.city);

function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // другие свойства
    };
}

let userCr = makeUser("Вася", 30);
console.log(userCr);

//изменение объекта
let userInfo = {
    name: "Леша",
};

console.log(userInfo);

userInfo.age = 15;
console.log(userInfo);

userInfo["likes javascript"] = true;
console.log(userInfo);

userInfo.address = {
    city: "Ростов-на-Дону",
    street: "пл. Гагарина",
    };
console.log(userInfo);

//удаление свойства
delete userInfo.age;

//копирование объекта
let userNew = user;
console.log(userNew);

userNew.age = 18;
console.log(user); //значение свойства age в объекте user изменится на 18

//дублирование объектов
let userObj = Object.assign({}, user);
userObj.age = 18;
console.log(userObj);

console.log(user);

Object.assign(userObj, {sport: "Boxer"}); //добавление новых свойств в объект
console.log(userObj);
