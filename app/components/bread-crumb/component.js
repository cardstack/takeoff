import Ember from 'ember';

const get = Ember.get;
const {
  EnumerableUtils,
  Component,
  computed,
  getWithDefault
} = Ember;

const {
  map,
  filter
} = EnumerableUtils;

export default Component.extend({
  routeHierarchy: computed('currentRouteName', {
    get() {
      const container = get(this, 'container');
      const currentRouteName = getWithDefault(this, 'currentRouteName', '');

      if (currentRouteName === '') {
        return;
      }

      const routeNames = currentRouteName.split('.');

      const filteredRouteNames = filter(routeNames, (name) => {
        return name !== 'index';
      });

      return map(filteredRouteNames, (name, index) => {
        let path;
        const routes = routeNames.slice(0, index + 1);

        if (routes.length === 1) {
          path = `${name}.index`;
        } else {
          path = routes.join('.');
        }

        const routeObject = container.lookup(`route:${path}`);
        const breadCrumb = routeObject.getWithDefault('breadCrumb', {});
        const title = getWithDefault(breadCrumb, 'title', name);
        const iconName = getWithDefault(breadCrumb, 'iconName', null);

        return { path, title, iconName };
      });
    }
  })
});
