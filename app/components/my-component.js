import Component from '@ember/component';
import { action } from '@ember/object';

export default Component.extend({
  iconNames: undefined,

  init() {
    this._super(...arguments);
    this.iconNames = ['a', 'b', 'c'];
    document.addEventListener('click', this.handleDocumentClick);
  },
  willDestroy() {
    document.removeEventListener('click', this.handleDocumentClick);
  },

  click() {
    // eslint-disable-next-line no-console
    console.log(`some action that forces our {{each}} subject to update before
    the click event propagates to our document click handler below`);
    this.set('iconNames', this.iconNames.slice());
  },

  handleDocumentClick: action(function(event) {
    let eventTargetIsAttachedToDOM = Boolean(event.target.closest('html'));
    // eslint-disable-next-line no-console
    console.log({
      eventTarget: event.target,
      eventTargetIsAttachedToDOM,
    })
    if (!eventTargetIsAttachedToDOM) {
      throw new Error('event target no longer attached to the DOM');
    }
  }),
});
