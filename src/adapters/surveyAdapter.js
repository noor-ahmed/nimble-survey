import Api from 'utils/Api';

class SurveyAdapter {
  static getList = (pageNumber, token) => {
    return Api.get(`api/v1/surveys?page[number]=${pageNumber}`, {
      headers: {
        Authorization: token
      },
    });
  };
}

export default SurveyAdapter;
