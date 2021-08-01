let people = [
    {name: 'Artem', age: 22},
    {name: 'Dima', age: 18},
    {name: 'Anton', age: 15},
    {name: 'Taras', age: 38},
];
//splice - добавляет, удаляет или заменяет элементы массива.
let removedSplice = people.splice(1,2);
let removedSplice2 = people.splice(0,3, "Erunda");
//slice - возвращает новый массив, в который копирует новые элементы.
let newSlice = people.slice(0,2);
let newSlice2 = people.slice(2,3);
//concat - создает новый массив, копируя значения другого и добавляя свои.
console.log(people.concat());
console.log(people.concat({name: 'Denis', age: 74}));
//forEach - запуск функции для каждого элемента массива
people.forEach(function(name){
    if (typeof(name) == Object){
        console.log(name);
    }
});
//indexOf - ищет по массиву элемент и возвращает индекс, на котором он находится
people.indexOf({name: 'Dima', age: 18},0);
//lastIndexOf - то же самое, толь ищет с конца массива
people.lastIndexOf({name: 'Dima', age: 18},3);
//includes - проверка наличия элемента в массива, возвращает true или false
people.includes({name: 'Anton', age: 15});
//Find - поиск элемента с определенным условием(находит - true, не находит - undefined)
let peopleFind = people.find(function(item){
    item.name = 'Artem'
});
let peopleFindRaketa = people.find(item => item.name === 'Artem');
//findIndex - то же самое, только возвращает индекс элемента, если он найден
let peopleFindIndex = people.findIndex(function(item){
    item.name = 'Dima'
});
let peopleFindIndexRaketa = people.findIndex(item => item.name === 'Dima');
