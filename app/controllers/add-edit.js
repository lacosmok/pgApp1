import Ember from 'ember';

export default Ember.Controller.extend({

    reset() {

        this.get('store').findAll('mark').then(
            marks => {
                this.set('marks', marks);
            }
        );
        this.get('store').findAll('option').then(
            options => this.set('options', options)
        )


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
        },
        applyOption(target) {
            console.log("Target : ", target);
        }
    }
});
