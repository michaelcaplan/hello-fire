/* globals Vue, Vuefire, firebase */

// Tell Vue about the Vuefire plugin
Vue.use(Vuefire);

var config = {
    apiKey: "AIzaSyB-MOVIoNyW2U873H6MliNyqNdzGkDP600",
    authDomain: "hoist-av.firebaseapp.com",
    databaseURL: "https://hoist-av.firebaseio.com",
    projectId: "hoist-av",
    storageBucket: "hoist-av.appspot.com",
    messagingSenderId: "616588929847"
  };

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

// 1. create a reference to the todos collection
var todosCollection = db.collection("todos")

// app Vue instance
var app = new Vue({
  
  el: '#app',
  
  // app initial state
  data: {
    newTodo: '',
    todos: [],
    editedTodo: null
  },

  firestore: {
    // 2. tell vue what collection to bind to the todos data element
    todos: todosCollection
  },
  
  filters: {
    pluralize: function (n) {
      return n === 1 ? 'item' : 'items'
    }
  },

  // methods that implement data logic.
  methods: {
    addTodo: function () {
      var value = this.newTodo && this.newTodo.trim()
      if (!value) {
        // todo is empty, nothing to do
        return
      }
      
      // 3. Add a new collection document to "todos"
      todosCollection.add({
        title: value,
        completed: false
      })

      
      // clear out the newTodo variable
      this.newTodo = ''
    },

    removeTodo: function (todo) {
      
      // 4. Delete the document from the todos collection
      todosCollection.doc(todo.id).delete();
      
    },
    
    completed: function (todo) {
      
      // 5. Update completed for the current document
      todosCollection.doc(todo.id).update({
        completed: !todo.completed
      })
        

    },

    editTodo: function (todo) {
      this.beforeEditCache = todo.title;
      this.editedTodo = todo;
    },

    doneEdit: function (todo) {
      if (!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      
      var title = todo.title.trim();
      
      if (!title) {
        this.removeTodo(todo);
      } else {
        // 6. Update the current document in the todos collection
        todosCollection.doc(todo.id).update({
          title: title
        });
      }
    },

    cancelEdit: function (todo) {
      this.editedTodo = null;
      todo.title = this.beforeEditCache;
    },

    removeCompleted: function () {
      
      // 7. Remove all the completed todos from the todos collection
      var batch = db.batch();
      
      for(var i = 0; i < this.todos.length; i++) {
        if(this.todos[i].completed) {
          var item = todosCollection.doc(this.todos[i].id)
          batch.delete(item)
        }
      }
      batch.commit();
    }
  },

   // computed properties
  // http://vuejs.org/guide/computed.html
  computed: {
    remaining: function () {
      
      var incompleteTodos = this.todos.filter(function (todo) {
        return !todo.completed;
      });
      
      return incompleteTodos.length
    }
  }
})

