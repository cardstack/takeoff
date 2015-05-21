import Ember from 'ember';

const {
  Controller,
  inject,
  computed
} = Ember;

export default Controller.extend({
  application: inject.controller(),
  sidebarManager: inject.service(),

  currentSideBar: computed.alias('sidebarManager.currentSideBar')
});
