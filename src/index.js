import "./styles.css";

let john = { name: "john" };
let map = new Map();
map.set(john, 1);

let mapDiv = document.createElement("div");
mapDiv.id = "mapDiv";

for (let [k, v] of map.entries()) {
  mapDiv.innerHTML = `<h4>Map</h4>
  <div>john object: ${JSON.stringify(john)}<div>
  <div>${JSON.stringify(k)}, ${JSON.stringify(v)}</div>`;
}
document.getElementById("app").append(mapDiv);

john = null;
let map1 = document.createElement("div");
map1.id = "map1";
for (let [k, v] of map.entries()) {
  map1.innerHTML = `
    <h4>Map after object being set to null</h4>
    <div>john object: ${JSON.stringify(john)}<div>
    <div>${JSON.stringify(k)}, ${JSON.stringify(v)}</div>
    <hr />`;
}
document.getElementById("app").append(map1);

let jane = { name: "jane" };
let weakMap = new WeakMap();
weakMap.set(jane, 2);

let weakMapDiv = document.createElement("div");
weakMapDiv.id = "weakMapDiv";

weakMapDiv.innerHTML = `
  <h4>Weak Map</h4>
  <div>jane object: ${JSON.stringify(jane)}</div>
  <div><strong>check weakMap has value:</strong> ${JSON.stringify(
    weakMap.has(jane)
  )}</div>`;
document.getElementById("app").append(weakMapDiv);

jane = null;
let weakMapDiv1 = document.createElement("div");
weakMapDiv1.id = "weakMapDiv1";

weakMapDiv1.innerHTML = `
  <h4>Weak Map after object being set to null</h4>
  <div>jane object: ${JSON.stringify(jane)}</div>
  <div><strong>check weakMap has value:</strong> ${JSON.stringify(
    weakMap.has(jane)
  )}</div>
  <hr />`;
document.getElementById("app").append(weakMapDiv1);

let doe = { name: "doe" };
let set = new Set();
set.add(doe);
let setDiv = document.createElement("div");
setDiv.id = "setDiv1";

for (let k of set) {
  setDiv.innerHTML = `
    <h4>Set</h4>
    <div>doe object: ${JSON.stringify(doe)}</div>
    <div>${JSON.stringify(k)}</div>`;
}
document.getElementById("app").append(setDiv);

doe = null;
let setDiv1 = document.createElement("div");
setDiv1.id = "setDiv1";
for (let k of set) {
  setDiv1.innerHTML = `
    <h4>Set aftter object becomes null</h4>
    <div>doe object: ${JSON.stringify(doe)}</div>
    <div>${JSON.stringify(k)}</div>
    <hr />`;
}
document.getElementById("app").append(setDiv1);

let dane = { name: "dane" };
let weakSet = new WeakSet();
weakSet.add(dane);

let weakSetDiv = document.createElement("div");
weakSetDiv.id = "setDiv1";
weakSetDiv.innerHTML = `
  <h4>Weak Set1</h4>
  <div>dane object: ${JSON.stringify(dane)}</div>
  <div>${JSON.stringify(weakSet.has(dane))}</div>`;
document.getElementById("app").append(weakSetDiv);

dane = null;
let weakSetDiv1 = document.createElement("div");
weakSetDiv1.id = "setDiv1";
weakSetDiv1.innerHTML = `
  <h4>Weak Set after object set to null </h4>
  <div>dane object: ${JSON.stringify(dane)}</div>
  <div><strong>check weakSet has value:</strong>${JSON.stringify(
    weakMap.has(dane)
  )}</div>
  <hr />`;
document.getElementById("app").append(weakSetDiv1);
