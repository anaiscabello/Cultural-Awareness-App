// Libraries
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

/**
 * @typedef ConfidenceScore
 * @param {String} id
 * @param {String} title
 * @param {String} color
 */

/**
 * @typedef Insight
 * @param {String} id
 * @param {String} title
 * @param {String} description
 * @param {ConfidenceScore} confidenceScore
 * @param {Number} numVotes
 * @param {Number} totalVotes
 * @param {Array<String>} keyInsights
 * @param {Array<{link: String, title: String}>} sources
 * @param {String} sourcesVerifiedBy
 */

// export const CONFIDENCE_SCORES = {
//     accurate: { id: 'accurate', title: 'Accurate', color: '#34C759' },
//     reasonable: { id: 'reasonable', title: 'Reasonable', color: '#5AC8FA' },
//     questionable: { id: 'questionable', title: 'Questionable', color: '#FFCC00' },
//     questionabl: { id: 'questionabl', title: 'Questionabl', color: '#FFCC00' },
// }

 let ids = 0;


export const CATEGORIES = {
    communication: { id: 'communication', title: 'Communication'},
    // preferences : { id: 'preferences', title: 'Time Orientation and Personal Space Preferences'},
    // socialRoles: { id: 'socialRoles', title: 'Social Roles'},
    // illness: { id: 'illness', title: 'Health and Illness'},
    // risks: { id: 'risks', title: 'Risks'},
    // interventions: { id: 'interventions', title: 'Interventions'},
}

function createTestInsights(cultureId) {
    return Object.keys(CATEGORIES).map((cs) => {
        return createTestInsight(++ids, cs);
    });
}

function createTestInsight(insightId, confidenceScore) {
    return {
        id: insightId,
        title: lorem.generateSentences(1),
        description: lorem.generateParagraphs(3),
        //confidenceScore: CONFIDENCE_SCORES[confidenceScore],
        //numVotes: Math.floor(Math.random()*12),
        //totalVoters: 12,
        keyInsights: [
            lorem.generateSentences(1),
            lorem.generateSentences(1),
        ],
        sources: [
            {link: lorem.generateSentences(1), title: lorem.generateWords(3)},
            {link: lorem.generateSentences(1), title: lorem.generateWords(3)},
            {link: lorem.generateSentences(1), title: lorem.generateWords(3)}
        ],
        sourcesVerifiedBy: lorem.generateWords(2),
    };
}

/**
 * Get the list of cultures from database
 * @returns {Promise<Array<Culture>>}
 */
export function getInsightsForCulture(cultureId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(createTestInsights(cultureId)); // Put firebase code here to get cultures
        }, 500); // test delay
    });
}

/**
 * Get specific details about an insight
 * @param {String} insightId
 * @returns {Promise<Insight>} 
 */
export function getInsightDetails(insightId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(createTestInsight(insightId, CONFIDENCE_SCORES.accurate));
        }, 500); // test delay
    });
}