import Ember from 'ember';

export default Ember.Controller.extend({
    actions : {
        saveVehicle() {

            this.get('model').save().then(
                ()=>{
                    console.log("Zapisany");
                    this.transitionToRoute('list');
                }
            );
        }
    }
});
