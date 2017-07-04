import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('equations', function() {
    this.route('show', { path: '/:equation_id' });
  });
});

export default Router;
