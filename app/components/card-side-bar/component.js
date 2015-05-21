import Ember from 'ember';

const get = Ember.get;
const set = Ember.set;
const {
  Component
} = Ember;

export default Component.extend({
  classNames: [ 'sideBar', 'sideBar__escaped' ],
  cardTypes: [
    {
      name: 'Forms',
      isExpanded: false,
      cards: [
        {
          name: 'Mailchimp',
          type: 'form',
          imageUrl: 'assets/images/card-mailchimp.png',
          showName: false
        }
      ]
    },
    {
      name: 'Video',
      isExpanded: false,
      cards: [
        {
          name: 'Vimeo',
          type: 'video',
          imageUrl: 'assets/images/card-vimeo.png',
          showName: false
        },
        {
          name: 'YouTube',
          type: 'video',
          imageUrl: 'assets/images/card-youtube.png',
          showName: false
        }
      ]
    },
    {
      name: 'Images',
      isExpanded: false,
      cards: [
        {
          name: 'Background Slideshow',
          type: 'image',
          imageUrl: 'assets/images/card-background-slideshow.png',
          showName: true
        },
        {
          name: 'Image',
          type: 'image',
          imageUrl: 'assets/images/card-image.png',
          showName: true
        }
      ]
    },
    {
      name: 'Text',
      isExpanded: false,
      cards: [
        {
          name: 'Bullet Points',
          type: 'text',
          imageUrl: 'assets/images/card-bullet-points.png',
          showName: true
        },
        {
          name: 'Plain Text',
          type: 'text',
          imageUrl: 'assets/images/card-plain-text.png',
          showName: true
        }
      ]
    },
    {
      name: 'Code',
      isExpanded: false,
      cards: [
        {
          name: 'Codepen',
          type: 'code',
          imageUrl: 'assets/images/card-codepen.png',
          showName: false
        }
      ]
    }
  ],

  actions: {
    toggleCardTypeVisibility(index) {
      const cardTypes = get(this, 'cardTypes');
      const cardType = cardTypes[index];
      const isCardTypeExpanded = get(cardType, 'isExpanded');

      cardTypes.setEach('isExpanded', false);
      set(cardType, 'isExpanded', !isCardTypeExpanded);
    },

    addCardToTemplate(card) {
      this.sendAction('addCard', card);
    },

    toggleSlotSelection() {
      this.sendAction('toggleSlotSelection');
    }
  }
});
