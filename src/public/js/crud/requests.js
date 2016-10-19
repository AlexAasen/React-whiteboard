import $ from 'jquery';

const baseUrl = 'http://localhost:8081/floggit/';

// const requestCall = (callType, path, dataObject, callback) => {
//   if (callType === 'POST' || callType === 'PUT') {
//     $.ajax({
//       url: baseUrl + path,
//       crossDomain: true,
//       type: callType,
//       data: JSON.stringify(dataObject),
//       dataType: 'json',
//       contentType: 'application/json',
//       success: callback
//     });
//   } else if (callType === 'GET' || callType === 'DELETE') {
//     $.ajax({
//       url: baseUrl + path,
//       crossDomain: true,
//       type: callType,
//       dataType: 'json',
//       accept: 'application/json',
//       contentType: 'application/json',
//       success: callback
//     });
//   }
// };

const requestCall = (callType, path, dataObject, callback) => {
  $.ajax({
    url: baseUrl + path,
    crossDomain: true,
    type: callType,
    data: JSON.stringify(dataObject),
    dataType: 'json',
    contentType: 'application/json',
    success: callback
  });
};

export default requestCall;
