// fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(json => console.log(json))

const loadData = () => {
    console.log('Hello world');
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(json => console.log(json))
}