// Q1
function max(iterable, key) {
    var maximum = 0;
    for (var item in iterable) {
      var temp = key(item);
      if (temp >= key(maximum)) {
        maximum = item;
      }
    }
    return maximum;
}

//Q2
const reverser = (a) => -a;

//Q4
function changer(object, key, value) {
    var prev = object[key];
    if (Array.isArray(prev)) {
      prev.push(value);
    } else if (typeof prev == 'object' && prev != null) {
      prev[key] = value;
    } else {
      object[key] = value;
    }
    return null;
  }

  //Q5
  async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1);
        resolve();
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = a.then(() => 5);
    console.log(five)
    return five
}