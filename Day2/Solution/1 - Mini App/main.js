var index = 1;

document.getElementById('add').addEventListener('click', () => {

  document.getElementById('list').innerHTML += '<li>' + index + '</li>';
  index++
});

document.getElementById('remove').addEventListener('click', () => {

  var lastLi = document.querySelector('#list li:last-child');

  if(lastLi) {
    document.querySelector('#list li:last-child').remove();
    index--;
  }
});