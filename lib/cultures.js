/**
 * @typedef Culture
 * @param {String} id
 * @param {String} name
 * @param {Array<String>} categories
 * @param {Array<Insight>} insights
 * @param {String} description
 */

 /**
  * @typedef Insight
  * @param {String} id
  * @param {String} category
  * @param {String} text
  */

import * as firebase from 'firebase';

/**
 * Get the list of cultures from database
 * @returns {Promise<Array<Culture>>}
 */
export function getCultures() {
    return new Promise((resolve, reject) => {
        const ref = firebase.database().ref('cultures');
        const cultures = [];
        ref.once('value', (snapshot) => {
            snapshot.forEach((child) => {
                const id = child.key;
                const culture = child.val();
                cultures.push({
                    id,
                    ...culture,
                });
            });
            resolve(cultures);
        });
    });
}

/**
 * Get the list of all culture categories
 */
export function getCategories(cultureId) {
    return new Promise((resolve, reject) => {
        const ref = firebase.database().ref(`cultures/${cultureId}/categories`);
        const categories = [];
        ref.once('value', (snapshot) => {
            snapshot.forEach((child) => categories.push(child.val()));
            resolve(categories);
        });
    });
}