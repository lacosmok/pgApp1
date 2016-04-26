import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('add');
  this.route('list');
  this.route('edit', {path: '/edit/:vehicle_id'});
});

export default Router;
