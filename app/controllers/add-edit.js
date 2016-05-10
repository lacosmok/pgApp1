import Ember from 'ember';

export default Ember.Controller.extend({

    reset() {

        this.get('store').findAll('mark').then(
            marks => {
                this.set('marks', marks);
            }
        );


    },

    actions : {
        saveVehicle() {
            this.get('model').save().then(
                ()=>this.transitionToRoute('list')
            );
        },

        changedMark(newMark) {
            this.get('store').find('mark', newMark).then(
                mark => this.set('model.mark', mark)
            );
        }
    }
});
