import Ember from 'ember';
import Route from '../basic/route';

export default Route.extend({
  breadCrumb: {
    title: 'Home',
    iconName: 'avatar'
  },

  model() {
    const fakePage1 = this.store.createRecord('page', {
      id: UUID.generate(),
      templateId: 0,
      title: 'The Mutants Are Revolting',
      imageUrl: 'http://www.placecage.com/c/300/350'
    });
    const fakePage2 = this.store.createRecord('page', {
      id: UUID.generate(),
      templateId: 1,
      title: 'A Taste of Freedom',
      imageUrl: 'http://www.placecage.com/g/300/350'
    });
    const fakePage3 = this.store.createRecord('page', {
      id: UUID.generate(),
      templateId: 0,
      title: 'How Hermes Requisitioned His Groove Back',
      imageUrl: 'http://www.placecage.com/300/350'
    });

    return this.store.all('page');
  }
});
