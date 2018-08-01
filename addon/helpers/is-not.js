import Ember from 'ember';

function isNotHelper(params) {
  return !params[0];
}

var forExport = null;
if(typeof Ember.HTMLBars.makeBoundHelper === 'function') {
  forExport = Ember.Helper.helper(isNotHelper);
}
else if(typeof Ember.Handlebars.makeBoundHelper === 'function') {
  forExport = Ember.Handlebars.makeBoundHelper(isNotHelper);
}
else {
  forExport = Ember.Helper.helper(isNotHelper);
}
export default forExport;
