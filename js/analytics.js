function track(e,t){t=t||{},dataLayer.push(extendObject(analyticsData,{event:e,eventLabel:t.label,eventCategory:t.category,eventValue:t.value}))}function getParameterByName(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}function getCookie(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var a=n[r];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return""}function setCookie(e,t){var n=new Date;n.setTime(n.getTime()+6048e5);var r=n.toUTCString();document.cookie=e+"="+t+";expires="+r+";domain=.interexchange.org;path=/"}function setParamCookie(e){var t=getParameterByName(e);return t?setCookie(e,t):t=getCookie(e),t}function extendObject(){for(var e,t={},n=0,r=arguments.length;n<r;n++)for(e in arguments[n])arguments[n].hasOwnProperty(e)&&(t[e]=arguments[n][e]);return t}