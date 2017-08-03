import { database } from './firebaseApp';

const submitSurvey = (participantId, survey) => {
    this.itemsRef = database.ref(`users/${participantId}`);
    const timeInMs = Date.now();
    this.itemsRef.push({ timeStamp: timeInMs, survey: survey });
}

export default {
    submitSurvey
}
