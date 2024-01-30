function test(f) {
  setTimeout(() => {
    tests++; let t = performance.now();
    try {
      f() ? succes(performance.now() - t) : fail();
    } catch (e) {
      fejl(e);
    } finally { console.log(m.size); }
  }, 0)
}
let output, writeLN, tests = 0;
if (window) {
  output = document.body.appendChild(document.createElement("p"));
  writeLN = function (s) { output.innerHTML += s + "<br>"; }
} else {
  writeLN = function (s) { console.log(s); }
}
function fail() { writeLN("Test " + tests + " mislykkedes.") }
function succes(s) { writeLN("Test " + tests + " lykkedes på " +  Number(s).toPrecision(3) + " msec.") }
function fejl(s) { writeLN("Test " + tests + " fejlede med " + s + ".") }
let m = new Mængde(), n = new Mængde();
test(function () {
  for (var l = i = 30; i--; m.add(i));
  return m.size === l;
});
test(function () {
  var b = true;
  for (var i = m.size; i--; b = b && m.isElement(i));
  return b;
});
test(function () {
  return !m.isElement("5");
});
test(function () {
  return m.remove(5);
});
test(function () {
  return !m.isElement(5);
});
test(function () {
  return !m.add(1);
});
test(function () {
  m.clear(); return m.size === 0;
});
test(function () {
  for (var i = 10000; i--; m.add(i)) n.add(i);
  return m.equals(n);
});
test(function () {
  return n.remove(2) && !m.equals(n);
});
test(function(){
  return m.element(-10) === null
});