let users = [
    {id: 1, name: 'Alex', lastname: 'Wilyam', age: 20},
    {id: 2, name: 'Steven', lastname: 'King', age: 34},
]
users.push({id:3, name:'mugushka', lastname: 'vaylamatov', age:18});
console.log(users)

users[0]={id:1, name:'ramazan', lastname:'shayhmagomedov', age: 17};
console.log(users)

users.pop({id: 2, name: 'valya', lastname: 'karnaval', age: 23});
console.log(users)