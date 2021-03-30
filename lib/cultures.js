/**
 * @typedef Culture
 * @param {String} id
 * @param {String} name 
 */

 /**
  * @typedef CultureCategory
  * @param {String} id
  * @param {String} title
  */

import firebase from 'firebase';

const DEFAULT_CULTURES = [
    {id: '1', name: 'African American'},
    {id: '2', name: 'American Indian'},
    {id: '3', name: 'Asian'},
    {id: '4', name: 'Hindu'},
    {id: '5', name: 'Male'},
];

const DEFAULT_CATEGORIES = [
    {id: '1', name: 'Ethnicity'},
    {id: '2', name: 'Religion'},
    {id: '3', name: 'Gender Identity'},
];

/**
 * Get the list of cultures from database
 * @returns {Promise<Array<Culture>>}
 */
export function getCultures() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(DEFAULT_CULTURES);
        }, 500); // test delay
    });
}

/**
 * Get the list of all culture categories
 */
export function getCategories() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(DEFAULT_CATEGORIES);
        }, 500); // test delay
    });
}