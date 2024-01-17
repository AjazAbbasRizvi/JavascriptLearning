const firstSet = new Set([1,2,3]);


firstSet.add(25);
firstSet.add("Ajaz");
firstSet.add(["Item1", "Item2"]);
firstSet.add(["Item1", "Item2"]);
firstSet.add([1, 2, "Item4"]);

// console.log(firstSet);

// check whether set have a element or not 

// const ans = firstSet.has(3);
const ans = firstSet.has("Ajaz");
// console.log(ans);

// for of loop on sets 

for (let items of firstSet) {
    // console.log(items);
}

// finding unique element from array using sets 

const array = [1, 2, 2, 2, 3, 4, 5, 5, 6, 7, 8];
const secSet = new Set(array);
// console.log(secSet);

// finding the size of set 

console.log(secSet.size);
console.log(firstSet.size);
