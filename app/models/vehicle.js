import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';

export default Model.extend({
    name: attr('string'),
    places: attr('number'),
    color: attr('string'),

    mark : DS.belongsTo('mark'),

    options : DS.hasMany('option')
});
