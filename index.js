/*for (var i = 2; i <= 10; i = i + 2) {
    document.write(i + '<br>');
}

var j = 0;
while (j <= 10) {
    document.write(j + '<br>');
    j++;
}

var k = 0;
do {
    break;
    document.write(k + '<br>');
    k++;
} while (k <= 10);*/

/*var cats = ['Pushok', 'Barsik', 'Ivanchik'];
    cats.push('Puhlik');
document.write(cats[0]);

for (var i = 0; i < cats.length; i++) {
    document.write(cats[i] + '<br>');
}

var dogs = {
    max: 3,
    lex: 4,
    sirko: 5,
    rex: 7
};
document.write(dogs['sirko']);

var max = {
    name: 'Max',
    age: 3
}
document.write(max.name);*/

/*while (true) {
    var number = prompt('Enter you number', '');
    
if (number == null) {
    break;
}
alert('your number is' + number);
}
*/
/*var age = prompt('возраст?', 18);
var message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message );*/

var value = prompt('When JS startet?', '');

if (value = 'ecmascript') {
    alert('Bravo');
} else {
    alert('no');
}