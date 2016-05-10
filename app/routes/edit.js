import Ember from 'ember';

export default Ember.Route.extend({

    controllerName : 'addEdit',
    templateName : 'addEdit',


    setupController( controller, model ) {
        controller.reset();
        return this._super( ...arguments );
    },

    deactivate : function() {
        let model = this.get('currentModel');
        if (model.get('hasDirtyAttributes')) {
            model.rollbackAttributes();
        }
        this.get('currentModel').rollbackAttributes();
    }

});
