import Ember from 'ember';

export default Ember.Route.extend({
  const Person = Ember.Object.extend({
    sayHello: function(){
      return `Hi, my name is ${this.get('name')}`
    }
  });
});

//  -  a unit price
//  -  a quantity
//  -  a computed property called `orderPrice`, equal to price times quantity



let frank = Person.create({
  name: "Frank"
})

frank.sayHello();
