//0
function getNumbers(a) {
	let a1= [];
	for (let i = 0; i < a.length ; i++) {
		let sym = parseInt(a[i]);
		if (!isNaN(sym)) {
			a1.push(sym);
		}
	}
	return a1;
}
console.log(getNumbers('string'));
console.log(getNumbers('n1um3ber95'));
//1
function findTypes() {
    let dataTypes = {};
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        if (dataTypes.hasOwnProperty(type)) {
            dataTypes[type]++;
        } else {
            dataTypes[type] = 1;
        }
    }
    return dataTypes;
}
//2
function executeforEach(array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
}
//3
function mapArray(array, func) {
    let array1 = [];
    executeforEach(array, function (el) {
        array1.push(func(el));
    });
    return array1;
}
//4 
function filterArray(array, func) {
    let array1 = [];
    executeforEach(array, function (el) {
        if (func(el)) {
            array1.push(el);
        }
    });
    return array1;
}
//5
function showFormattedDate(date) {
    let two=2;
    let three=3;
    let four=4;
    let five=5;
    let month = date.getMonth();
    switch (month) {
    case 0:
      month = 'Jan';
      break;
    case 1:
      month = 'Feb';
      break;
    case two:
      month = 'Mar';
      break;
    case three:
      month = 'Apr';
      break;
    case four:
      month = 'May';
      break;
    case five:
      month = 'Jun';
      break;
    case three*two : 
      month = 'Jul';
      break;
    case five+two:
      month = 'Aug';
      break;
    case five+three:
      month = 'Sep';
      break;
    case five+four:
      month = 'Oct';
      break;
    case five*two:
      month = 'Nov';
      break;
    case five*two+1:
      month = 'Dec';
      break;
    default: undefined;
  }
  return `Date:${month} ${date.getDate()} ${date.getFullYear()}`
}
//6
function canConvertToDate(string) {
    return !isNaN(Date.parse(string));
}
//7
function daysBetween(date1, date2) {
    const h = 24;
    const s = 3600;
    const milliS = 1000;
    let time = milliS*h*s;
    return Math.floor(Math.abs(date2.getTime() - date1.getTime()) / time);
}
//8
function getAmountOfAdultPeople(array) {
    const days = 365.25;
    const age = 18;
    let yearOld = function (el) {
        return daysBetween(new Date(el.birthday), new Date()) / days >= age;
    };
    return filterArray(array, yearOld).length;
}
let data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
]
//9
function keys(object) {
	let array = [];
	for (let key in object) {
		if ({}.hasOwnProperty.call(object, key)) {
			array.push(key);
		}
	}
	return array;
}
//10
function values(object) {
    let array = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            array.push(object[key]);
        }
    }
    return array;
}