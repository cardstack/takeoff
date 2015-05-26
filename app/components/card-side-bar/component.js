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
          description: 'Newsletter management',
          type: 'form',
          thumbnail: 'assets/images/card-mailchimp.png',
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
          description: 'Video hosting for creators',
          type: 'video',
          thumbnail: 'assets/images/card-vimeo.png',
          showName: false
        },
        {
          name: 'YouTube',
          description: 'Hosts user-generated videos',
          type: 'video',
          thumbnail: 'assets/images/card-youtube.png',
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
          description: 'Rotating hero images',
          type: 'image',
          thumbnail: 'assets/images/card-background-slideshow.png',
          showName: true
        },
        {
          name: 'Image',
          description: 'Link to and import any image',
          type: 'image',
          thumbnail: 'assets/images/card-image.png',
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
          description: 'Create an ordered list of images and/or text',
          type: 'text',
          thumbnail: 'assets/images/card-bullet-points.png',
          showName: true
        },
        {
          name: 'Plain Text',
          description: 'Just a plain bit of text',
          type: 'text',
          thumbnail: 'assets/images/card-plain-text.png',
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
          description: 'Front End Developer Playground & Code Editor',
          type: 'code',
          thumbnail: 'assets/images/card-codepen.png',
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

    toggleSlotSelection(card) {
      this.sendAction('toggleSlotSelection', card);
    }
  }
});
