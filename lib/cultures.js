/**
 * @typedef Culture
 * @param {String} id
 * @param {String} title 
 * @param {Number} numInsights
 * @param {String} categoryId
 */

 /**
  * @typedef CultureCategory
  * @param {String} id
  * @param {String} title
  */

import { firebase } from './db.js';

const DEFAULT_CULTURES = [
    {id: '1', title: 'African American', numInsights: 10, categoryId: '1'},
    {id: '2', title: 'American Indian', numInsights: 12, categoryId: '1'},
    {id: '3', title: 'Asian', numInsights: 5, categoryId: '1'},
    {id: '4', title: 'Hindu', numInsights: 5, categoryId: '2'},
    {id: '5', title: 'Male', numInsights: 5, categoryId: '3'},
];

const DEFAULT_CATEGORIES = [
    {id: '1', title: 'Ethnicity'},
    {id: '2', title: 'Religion'},
    {id: '3', title: 'Gender Identity'},
];

/**
 * Get the list of cultures from database
 * @returns {Promise<Array<Culture>>}
 */
export function getCultures() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            firebase.database().ref("cultures").on('value', (snapshot) => {
                let cultures = [];
                const val = snapshot.val();
                for (const [culture_id, culture_body] of Object.entries(val)) {
                    let culture = {...culture_body, id: culture_id};
                    cultures.push(culture);
                }
                resolve(cultures); // Put firebase code here to get cultures
            });
        }, 500); // test delay
    });
}

/**
 * Get the list of all culture categories
 */
export function getCategories() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            firebase.database().ref("categories").on('value', (snapshot) => {
                let categories = [];
                const val = snapshot.val();
                for (const [category_id, category_body] of Object.entries(val)) {
                    let category = {...category_body, id: category_id};
                    categories.push(category);
                }
                resolve(categories); // Put firebase code here to get cultures
            });
            resolve(categories); // Put firebase code here to get categories
        }, 500); // test delay
    });
}