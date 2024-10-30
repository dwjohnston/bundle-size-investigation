import _ from 'lodash';

import printMe from './print.js';

import * as s from "@sentry/browser"; 
import ld from "launchdarkly-js-client-sdk";

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    element.appendChild(btn);


    console.log("sentry", s);
    console.log("launchdarkly",ld);
    return element;
  }
  
  document.body.appendChild(component());