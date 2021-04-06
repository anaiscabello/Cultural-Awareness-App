// Libraries
import * as firebase from 'firebase';

/**
 * Get the list of cultures from database
 * @returns {Promise<Array<Culture>>}
 */
export function getInsights(cultureId, category) {
    return new Promise((resolve, reject) => {
        const ref = firebase.database().ref(`cultures/${cultureId}/insights`);
        const insights = [];
        ref.once('value', (snapshot) => {
            snapshot.forEach((child) => {
                const id = child.key;
                const insight = child.val();
                insights.push({
                    id,
                    ...insight,
                });
            });
            resolve(insights);
        });
    });
}