import Ember from 'ember';

function isEqualHelper(params) {
  return params[0] === params[1];
}

var forExport = null;
if(typeof Ember.HTMLBars.makeBoundHelper === 'function') {
  forExport = Ember.Helper.helper(isEqualHelper);
}
else if(typeof Ember.Handlebars.makeBoundHelper === 'function') {
  forExport = Ember.Handlebars.makeBoundHelper(isEqualHelper);
}
else {
  forExport = Ember.Helper.helper(isEqualHelper);
}
export default forExport;
