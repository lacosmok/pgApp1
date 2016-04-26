import Ember from 'ember';

export default Ember.Route.extend({

    controllerName : 'addEdit',
    templateName : 'addEdit',

    model: function( ) {
        return this.get('store').createRecord('vehicle');
    }



});
