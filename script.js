const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");
const ul = document.querySelector(".list-container");

const fruit = [
  "Apple 🍎",
  "Apricot ",
  "Avocado 🥑",
  "Banana 🍌",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry 🍒",
  "Coconut 🥥",
  "Cranberry",
  "Cucumber 🥒",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape 🍇",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon 🍋",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango 🥭",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon 🍉",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive 🫒",
  "Orange 🍊",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya ",
  "Passionfruit",
  "Peach 🍑",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple 🍍",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry 🍓",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

let word = "";

//Adds the results to an array
function search(str) {
  let results = [];
  results = fruit.filter((word) => word.toLowerCase().indexOf(str) !== -1);

  return results;
}

function searchHandler(e) {
  let letter = e.key;
  word += letter.toLowerCase();
  const result = search(word);
  showSuggestions(result, word);
}

//Shows suggested search items

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = "";
  results.forEach(function (word) {
    const list = document.createElement("li");
    list.classList.add("list");
    list.innerText = word;
    console.log(list);
    ul.append(list);

    input.value === ""
      ? ul.classList.remove("has-suggestions")
      : ul.classList.add("has-suggestions");
  });
}

function useSuggestion(e) {
  if (e.target.className === "list") {
    input.value = e.target.innerText;
    ul.classList.remove("has-suggestions");
  }
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
