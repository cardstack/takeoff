import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('page', function() {
    this.route('edit', { path: 'edit/:page_id' });
    this.route('show', { path: '/:page_id' });
    this.route('download', { path: 'download/:page_id' });
  });
});
