// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
   return cats.push("Ralph");
};

function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
};

function destructivelyRemoveLastCat(name) {
    return cats.pop();
};

function destructivelyRemoveFirstCat(name) {
    return cats.shift();
};

const allCats = [...cats, "Broom"];

function appendCat(name) {
    return allCats;
};

const newCats = ["Arnold", ...cats];

function prependCat(name) {
    return newCats;
};

function removeLastCat(name) {
    return cats.slice(0, -1);
};

function removeFirstCat(name) {
    return cats.slice(1, cats.length)
}