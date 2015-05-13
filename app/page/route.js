import Ember from 'ember';
import Route from '../basic/route';
import UUID from 'UUID';

const {
  get: get,
  isEmpty
} = Ember;

export default Route.extend({
  breadCrumb: {
    title: 'Home',
    iconName: 'avatar'
  },

  model() {
    const noPages = isEmpty(this.store.all('page'));

    if (!noPages) {
      return;
    }

    this.store.createRecord('page', {
      id: UUID.generate(),
      templateId: 0,
      title: 'The Mutants Are Revolting',
      imageUrl: 'http://www.placecage.com/c/300/350'
    });
    this.store.createRecord('page', {
      id: UUID.generate(),
      templateId: 1,
      title: 'A Taste of Freedom',
      imageUrl: 'http://www.placecage.com/g/300/350'
    });
    this.store.createRecord('page', {
      id: UUID.generate(),
      templateId: 0,
      title: 'How Hermes Requisitioned His Groove Back',
      imageUrl: 'http://www.placecage.com/300/350'
    });

    return this.store.all('page');
  },

  actions: {
    removePage(id = null) {
      const flashMessages = get(this, 'flashMessages');
      const model = get(this, 'currentModel');
      const page = model.findBy('id', id);
      page.deleteRecord();
      model.removeObject(page);
      flashMessages.success('Page removed successfully');
    }
  }
});
