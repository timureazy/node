

document.querySelectorAll('.price').forEach(node => {
    node.textContent = new Intl.NumberFormat('ru-RU', {
        currency: 'rub',
        style: 'currency'
    }).format(node.textContent)
})

var elem = document.querySelector('.collapsible.expandable');
var instance = M.Collapsible.init(elem, {
  accordion: false
});


document.querySelector('#addStock').addEventListener('click', function(){
  fetch('/addroute', {method: 'post'})
  console.log('fghfd')
})