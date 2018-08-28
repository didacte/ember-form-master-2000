import Ember from 'ember';
const {oneWay} = Ember.computed;

export default Ember.TextField.extend({
  placeholder: oneWay('widgetAttrs.placeholder'),
  name: oneWay('widgetAttrs.name'),
  maxlength: oneWay('widgetAttrs.maxlength'),
  disabled: Ember.computed.oneWay('widgetAttrs.disabled'),

  type: Ember.computed('widgetAttrs.type', function(){
    return this.get('widgetAttrs.type') || 'text';
  }),

  focusOut(e) {
    this.sendAction('onUserInteraction', e, this);
    this.sendAction('onBlur', e, this);
  },

  keyUp(e) {
    this.sendAction('onKeyUp', e, this);
  },

  focusIn(e) {
    this.sendAction('onFocus', e, this);
  },

  afterRender(){
    this.attrs.registerWidgetId(this.elementId);
  }
});
