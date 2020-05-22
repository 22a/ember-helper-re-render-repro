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

  handleDocumentClick: action(function(event) {
    // eslint-disable-next-line no-console
    console.log({
      eventTarget: event.target,
      eventTargetIsAttachedToDOM: Boolean(event.target.closest('html')),
    })
  }),
});
