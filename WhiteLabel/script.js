function greet(lang){
    console.log(`Hello ${this.name} ${lang}`);
}
const obj1 = {
    name: 'Abhinav'
}
const obj2 = {
    name: 'Not Abhinav'
}

greet.apply(obj1, ["en"]);
greet.apply(obj2, ["es"]);