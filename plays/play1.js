const uname = 'Max'; // nem változik
let age = 22;
const hobbys = true;

age = 30;

const summUser = (userName, userAge, userHasHobby) =>
{
    return (
        'Name is '+
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
}


function UserSumm(userName, userAge, userHasHobby)
{
    return (
        'Name is '+
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
}

const add = (a,b) => a + b;

const addRandom = () => 1 + 2;
console.log(summUser(uname,age,hobbys));
console.log(UserSumm(uname,age,hobbys));
console.log(add(2,3));
console.log(addRandom());