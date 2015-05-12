import Conductor from 'conductor';

const containerCardPath = './cards/container-card.js';

export default class Environment {
  constructor(options) {
    const { containers } = options;

    this.conductorInstance = new Conductor();
    this.containerInstances = {};
    this.containers = containers;
    this.containerCardPath = containerCardPath;
    this.initCardManagerService(this.conductorInstance);

    window.Environment = this;
  }

  toString() {
    return 'Card Environment';
  }

  initCardManagerService(conductorInstance) {
    const cardManagerService = Conductor.Oasis.Service.extend({
      initialize(port) {
        this.sandbox.cardManagerPort = port;
      },

      addCard(card) {
        this.send('addCard', card);
      },

      destroyCards() {
        this.send('destroyCards');
      }
    });

    conductorInstance.addDefaultCapability('cardManager', cardManagerService);
  }

  sendMessage(containerKey, eventName, data = null) {
    const container = this.containerInstances[containerKey];

    if (!container) { return; }

    container.waitForLoad().then((loadedContainer) => {
      loadedContainer.sandbox.capabilities.cardManager[eventName](data);
    });
  }

  createContainerCard(containerId) {
    const { conductorInstance, containerCardPath } = this;
    const { capabilities } = options || [];
    const options = this.containers[containerId];
    const adapter = Conductor.adapters.inline;

    conductorInstance.loadData(containerCardPath, containerId, options);

    const containerCard = conductorInstance.load(containerCardPath, containerId, {
      capabilities,
      adapter
    });

    this.containerInstances[containerId] = containerCard;
    return containerCard;
  }
}
