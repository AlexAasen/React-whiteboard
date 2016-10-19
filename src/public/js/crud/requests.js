import $ from 'jquery';

const baseUrl = 'http://localhost:8081/floggit/';

const requestCall = (callType, path, callback, dataObject) => {
  $.ajax({
    url: baseUrl + path,
    crossDomain: true,
    type: callType,
    data: JSON.stringify(dataObject),
    dataType: 'json',
    cache: false,
    contentType: 'application/json',
    success: callback
  });
};

export default requestCall;
