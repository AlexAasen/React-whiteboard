const column = {title: 'Jag var 4', column: 4, postits: []};
const postit = {title: 'Jag tillhörde 4 - 1', column: 4, row: 2};
const postitput = {id: 1476279668711, postit: {title: 'fix the big bug', column: 1, row: 3}};
const baseUrl = 'http://localhost:1337/floggit/';

function post(data, endpoint) {
  $.ajax({
    dataType: 'json',
    contentType: 'application/json',
    type: 'POST',
    url: baseUrl + endpoint,
    crossDomain: true,
    timeout: 20000,
    data: JSON.stringify(data),
    error: function(json) {
      /*TODO*/
      if(json.statusText === 'error'){

      }
    }
  });
}

$('.column').on('click', function(event){
  event.stopPropagation();
  post(column, 'column/');
});

$('.postit').on('click', function(event){
  event.stopPropagation();
  post(postit, 'postit/');
});

$('.postitput').on('click', function(event){
  event.stopPropagation();
  put(postitput, 'postit/');
});

function put(data, endpoint){
  $.ajax({
    dataType: 'json',
    contentType: 'application/json',
    type: 'PUT',
    url: baseUrl + endpoint + data.id,
    data: JSON.stringify(data),
    error: function(json) {
      /*TODO*/
      if(json.statusText === 'error'){
      }
    }
  });
}
