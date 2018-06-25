f1('bacdc', 'dcbad')

function f1(a, b) {
  var a1 = a;
  var b1 = b
  var t = 0;
  for (let i of a) {
    t++
    var n = a1.indexOf(i);
    var m = b1.indexOf(i);

    if (n != -1 && m != -1) {
      a1 = a1.replace(i, '');
      b1 = b1.replace(i, '');
    }
    if (t == a.length) {
      console.log(a1.length + b1.length)
    }
  }
}


function f2(a, b) {
  var table = [];
  for (let index in b) {
    var find = 0;
    table[index] = find;
    for (let item of a) {
      if (b[index] == item) {
        find = find + 1;
        table[index] = find;
      }
    }
  }
  return table;
}

console.log(
  f2(
    ["aba", "baba", "aba", "xzxb", "xzxb", "ddd"], ["aba", "xzxb", "ab", "ddd"]
  )
);


function f3(a) {
  var parts = 0;
  const HOST_REGEX = /^[a-zA-Z0-9\-\.]+\./
  if (HOST_REGEX.test(a)) {
    for (let i in a) {
      var codeAscii = a.charCodeAt(i);
      if (codeAscii == 46) {
        parts = parts + 1;
      }
    }
    return parts
  } else {
    return 0;
  }
}
console.log(f3(".ahmed.abdelmoula.hello.quoi.dd"));


function f4() {
  var currentdate = new Date();
  var datetime = currentdate.getTime();
  console.log("f4(cb) at ", datetime);
  return new Promise(function (res, rej) {
    setTimeout(
      function () {
        res("------f4(cb):cb at ", datetime);
      },
      200,
      res
    );
  });
}
setInterval(function () {
  f4().then(function (value) {
    console.log(value);
  });
}, 100);
