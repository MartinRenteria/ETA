import axios from "axios";

class API {
  axios;

  constructor() {
    this.axios = axios.create();
  }

  /**
   * @param {String} name
   * @param {String} value
   */
  setHeader(name, value) {
    if (value) this.axios.defaults.headers.common[name] = value;
    else delete this.axios.defaults.headers.common[name];
  }

  /**
   * @param {object} userData
   * @param {String} userData.email
   * @param {String} userData.password
   *
   * @returns {Promise}
   */
  register(userData) {
    console.log();

    return this.axios.post("/api/register", userData);
  }

  /**
   * @param {object} surveyData.clockInOne
   * @param {String} surveyData.clockOutOne
   * @param {String} surveyData.clockInTwo
   * @param {String} surveyData.clockOutTwo
   * @param {String} surveyData.hoursWorked
   * @param {String} surveyData.questionOneScore
   * @param {String} surveyData.questionTwoScore
   *
   * @returns {Promise}
   */
  submitSurvey(surveyData) {
    console.log(surveyData);
    return this.axios.post("/api/surveys", surveyData);
  }

  /**
   * @param {object} userData
   * @param {String} userData.email
   * @param {String} userData.password
   *
   * @returns {Promise}
   */
  login(userData) {
    console.log();

    return this.axios.post("/api/login", userData);
  }

  authenticated() {
    return this.axios.post("/api/authenticated");
  }
}

export default new API();
