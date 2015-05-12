/* jshint esnext: true */
/* global Conductor, Ember */

const { forEach } = Ember.EnumerableUtils;

export default Conductor.card({
  conductorConfiguration: {
    allowSameOrigin: true
  },

  consumers: {
    cardManager: Conductor.Oasis.Consumer.extend({
      events: {
        addCard(newCard) {
          const { card: cardInstance } = this;
          const cardLength = cardInstance.data.cards.length;
          cardInstance.addCard(newCard);
          cardInstance.prepareSlot(newCard);
          cardInstance.appendCard(newCard, cardLength);
        },

        destroyCards() {
          this.card.destroyCards();
        }
      }
    })
  },

  services: {
    cardManager: Conductor.Oasis.Service.extend({
      initialize(port) {
        this.sandbox.cardManagerPort = port;
      },

      destroyCard(data) {
        this.send('destroyCard', data);
      },

      events: {
        addCard(data) {
          const { containerKey, card } = data;
          window.Environment.addCard(containerKey, card);
        },

        destroyCards(data) {
          const { containerKey } = data;
          window.Environment.destroyCards(containerKey);
        },

        didDestroyApp(card) {
          const { url, id } = card.url;

          const cardReference = this.sandbox.conductor.cards[url][id][0];
          this.sandbox.conductor.unload(cardReference);
        }
      }
    })
  },

  render(slotId) {
    this.slotId = slotId;
    this.prepareSlots();
    this.bootCards();
  },

  prepareSlots() {
    forEach(this.data.cards, this.prepareSlot, this);
  },

  prepareSlot(card) {
    const slot = document.querySelector(this.slotId);
    const element = document.createElement('div');
    const { uuid } = card;

    element.id = `${slot.id}-${uuid}`;
    card.elementId = `#${element.id}`;
    card.element = element;

    slot.appendChild(element);
  },

  bootCards() {
    const cardContainer = this;
    const { cards } = this.data;

    cardContainer.conductor = new Conductor();

    forEach(cards, cardContainer.appendCard, this);
  },

  addCard(card) {
    const { cards } = this.data;
    cards.push(card);
    return card;
  },

  appendCard(card, id) {
    const { conductor: conductorInstance} = this;
    const { elementId, url } = card;
    const { adapter } = card.options;
    const cardAdapter = Conductor.adapters[adapter];

    conductorInstance.addDefaultCapability('cardManager', this.services.cardManager);

    conductorInstance.loadData(url, id, {
      url,
      id
    });

    const cardInstance = conductorInstance.load(url, id, {
      adapter: cardAdapter
    });

    card.instance = cardInstance;

    cardInstance.appendTo(elementId).then(() => {
      cardInstance.render(elementId);
      card.instance.sandbox.el = card.element;
    });
  },

  destroyCards() {
    forEach(this.data.cards, this.destroyCard, this);
  },

  destroyCard(card) {
    const { instance } = card;

    instance.waitForLoad().then((loadedInstance) => {
      loadedInstance.sandbox.capabilities.cardManager.destroyCard();
    });
  }
});
