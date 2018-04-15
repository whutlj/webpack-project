"use strict";
import _ from 'lodash';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.innerHTML = ['Hello', 'webpack'].join(' ');
  return element;
}

document.body.appendChild(component());