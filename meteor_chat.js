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
