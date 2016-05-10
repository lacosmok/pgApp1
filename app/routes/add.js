import Ember from 'ember';

export default Ember.Route.extend({

    controllerName : 'addEdit',
    templateName : 'addEdit',

    model: function( ) {
        return this.get('store').createRecord('vehicle');
    },

    setupController( controller, model ) {
        controller.reset();
        return this._super( ...arguments );
    },

    deactivate : function() {
        let model = this.get('currentModel');
        if (model.get('isNew')) {
            this.get('currentModel').destroyRecord();
        }
    }



});
