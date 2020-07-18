// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue!'
//     }
// });

// app.message = 'I have changed the data!';

// var app = new Vue({
//     el: '#app',
//     data: {
//         seen: true
//     }
// })

// app.seen = false;

// var app = new Vue({
//     el: '#app',
//     data: {
//         todos: [
//             { text: 'Learn Javascript' },
//             { text: 'Learn Vue' },
//             { text: 'Build something awesome' }
//         ]
//     }
// });

// app.todos.push({ text: 'New item' })

// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue.js!'
//     },
//     methods: {
//         reverseMessage: function () {
//             this.message = this.message.split('').reverse().join('')
//         }
//     }
// })

// var app = new Vue({
//     el: "#app",
//     data: {
//         message: 'Hello Vue!'
//     }
// })

// Vue.component('todo-item', {
//     template: '<li>This is a todo</li>'
// })

// var app = new Vue({
//     el: '#app'
// })

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat'}
        ]
    }
})