import Ember from 'ember';
import Route from '../../basic/route';
// import Environment from 'environment';
// import UUID from 'UUID';

const {
  set: set
} = Ember;

export default Route.extend({
  breadCrumb: null,

  afterModel(model) {
    const title = `Editing: ${model.get('title')}`;

    set(this, 'breadCrumb', {
      title,
      iconName: 'download-black'
    });
  },

  activate() {
    // const environment = new Environment({
    //   containers: {
    //     'container-1': {
    //       cards: [
    //         { uuid: UUID.generate(), url: 'assets/animal.js', options: { adapter: 'inline' } },
    //         { uuid: UUID.generate(), url: 'assets/vehicle.js', options: { adapter: 'inline' } }
    //       ]
    //     },
    //     'container-2': {
    //       cards: [
    //         { uuid: UUID.generate(), url: 'assets/animal.js', options: { adapter: 'inline' } },
    //         { uuid: UUID.generate(), url: 'assets/vehicle.js', options: { adapter: 'inline' } }
    //       ]
    //     },
    //     'sidebar-1': {
    //       cards: [
    //         { uuid: UUID.generate(), url: 'http://localhost:8000/iframe.html', options: { adapter: 'iframe' }}
    //       ]
    //     }
    //   }
    // });

    // const container1 = environment.createContainerCard('container-1');
    // const container2 = environment.createContainerCard('container-2');
    // const sidebar1 = environment.createContainerCard('sidebar-1');

    // container1.render('#container-slot-1');
    // container2.render('#container-slot-2');
    // sidebar1.render('#sidebar');
  }
});
