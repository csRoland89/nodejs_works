const person =
{
    name:'Max',
    age: 29,
    greet()
    {
        console.log('Hi, I am ' + this.name);
    }
};

console.log(person);
person.greet();
console.log('-----------------------');
const hobbys = ['Sports', 'Cooking'];

for(let hobby of hobbys)
{
    console.log(hobby);
}
console.log('-----------------------');
console.log(hobbys.map(hobby => 'Hobby: ' + hobby));
console.log(hobbys);
hobbys.push('Programming');
console.log(hobbys);
console.log('-----------------------');
const copiedarrayinArray = [hobbys];
console.log(copiedarrayinArray);

const copiedArray = [...hobbys];
console.log(copiedArray);

const toArray = (...args) =>
{
    return args;
}

console.log(toArray(1,2,3,4));

console.log('-----------------------');

const printName = (personData) =>
{
    console.log(personData.name);
}

const printNamev2 = ({name}) =>
{
    console.log(name);
}

printName(person);
printNamev2(person);

const {name, age} = person;
console.log(name, age);

console.log('-----------------------');

const [hobby1, hobby2] = hobbys;
console.log(hobby1,hobby2);