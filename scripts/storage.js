"use strict";
function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}
function getFromStorage(key) {
  return localStorage.getItem(key);
}
function deleteStorage(key) {
  return localStorage.removeItem(key);
}

function deleteStorageValue(key) {
  return localStorage;
}
