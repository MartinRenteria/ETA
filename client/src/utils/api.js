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
  createSurvey(surveyData) {
    console.log(surveyData);
    return this.axios.post("/api/surveys", surveyData);
  }

  updateSurvey(id, surveyData) {
    console.log("what im putting", id, surveyData);
    return this.axios
      .put("/api/surveys/" + id, surveyData)
      .then(function (response) {
        console.log("response", response);
        console.log("saved successfully");
      });
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
