// Iniciamos una BBDD: persons
Persons = new Mongo.Collection('persons');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.setDefault('textoIncrementar', 'incrementar');
  Session.setDefault('textoDecrementar', 'decrementar');

  Template.chat.helpers({
    counter: function () {
      return Session.get('counter');
    },
    doubleNumber: function (num) {
      return num * 2;
    },
    textoIncrementar: function () {
      return Session.get('textoIncrementar');
    },
    textoDecrementar: function (num) {
      return Session.get('textoDecrementar');
    }
  });

  Template.chat.events({
    'click .incrementar': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    },
    'click .decrementar': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') - 1);
    },
    'mouseenter .incrementar': function () {
      // increment the counter when button is clicked
      Session.set('textoIncrementar', 'INCREMENTAR');
    },
    'mouseleave .incrementar': function () {
      // increment the counter when button is clicked
      Session.set('textoIncrementar', 'incrementar');
    },
    'mouseenter .decrementar': function () {
      // increment the counter when button is clicked
      Session.set('textoDecrementar', 'DECREMENTAR');
    },
    'mouseleave .decrementar': function () {
      // increment the counter when button is clicked
      Session.set('textoDecrementar', 'decrementar');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

//Vamos a colocar objetos en la BBDD
var personId = Persons.insert({
  name: 'Tomas Hromnik',
  nick: 'Bender',
  age: 29
});

Persons.insert({
  name: 'Josh Bender',
  nick: 'Elfoslav',
  age: 25
});

Persons.insert({
  name: 'Graham Agassiz',
  nick: 'Aggy',
  age: 32
});

Persons.update(personId, { $set: { age: 26 } });
Persons.update(
  { name: 'Tomas Hromnik' },
  { $inc: { age: 1 } }, //Incrementa la edad en 1
  { multi: true } //Actualiza múltiples documentos
);

Persons.findOne(personId);
Persons.findOne({nick: 'Elfoslav'});

Persons.findOne({nick: 'Elfoslav'}, {
  fields: {
    name: 1,
    nick: 1
  }
});

Persons.findOne({nick: 'Elfoslav'}, {
  fields: {
    nameage: 0
  }
});

Persons.find(); //Devuelve el puntero del objeto
Persons.find().fetch(); //Devuelve un Array de documentos

Persons.find({ name: 'Tomas Hromnik'}).fetch();

Persons.find({}, {
  sort: {name: 1}, // Ordenado ASC por nombre
  limit:2
}).fetch();

Persons.find({}, {
  sort: {name: -1}, // Ordenado DESC por nombre
  limit:2
}).fetch();

Persons.remove({ nick: 'Elfoslav' }); //Borrar Elfoslav de la coleccion Persons