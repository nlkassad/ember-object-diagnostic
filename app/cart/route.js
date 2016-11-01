import Ember from 'ember';

export default Ember.Route.extend({
});

//  -  an `addToCart` method, which adds a given Item to an array
//      called `orders` (HINT: You'll probably need to look through the
//      documentation for this one.)
//  -  a computed property called `totalPrice`, equal to the sum of
//      the `orderPrice` values for everything in the cart); it should be
//      recalculated any time an Order is added to the cart, removed from the
//      cart, or modified.

const Person = Ember.Object.extend({
  sayHello: function(){
    return `Hi, my name is ${this.get('name')}`
  }
});

let frank = Person.create({
  name: "Frank"
})

frank.sayHello();
