import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Volsvagen', 'Audi', 'Renault',"Honda","Mercedes","Skoda","BMW","Mazda","Chrystler","Bugatti"];
  }
});
