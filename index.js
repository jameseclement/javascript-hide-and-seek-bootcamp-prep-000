function getFirstSelector(selector){ 
return document.querySelector(selector)

}

function nestedTarget(){
return document.querySelector('div#nested div.target')
}

function increaseRankBy(n) {
 var lis = document.querySelectorAll('ul.ranked-list li');
 for (let i = 0; i < lis.length; i++) {
   lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
 }
}
function deepestChild(){
  var lis = document.getElementById('grand-node').querySelectorAll('div')
  var test;
  for (let i = 0; i < lis.length; i++) {
