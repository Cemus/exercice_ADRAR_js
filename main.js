import "./style.css";

/*
Exo 1 : déclarer des variables de différents types (string, number, boolean) et d'afficher leur contenu dans la console.
Exo 2 : Écrire un script qui convertit des degrés Celsius en Fahrenheit.
Conditions et boucles :
Exo 3 : Écrire une condition pour vérifier si un nombre est pair ou impair, et afficher un message correspondant.
Exo 4 : Utiliser une boucle for pour afficher les nombres de 1 à 10, puis inverser la boucle pour les afficher de 10 à 1.
Fonctions :
Exo 5 : créer une fonction simple qui prend deux nombres et renvoie leur somme.
Exo 6 : Créer une fonction pour vérifier si une chaîne de caractères contient un certain mot.
Tableaux et objets :
Exo 7 : Créer un tableau de prénoms et afficher chacun avec une boucle.
Exo 8: créer un objet simple représentant une personne (nom, âge, ville) et d'accéder aux propriétés. (On affiche en console)
Manipulation de DOM :
Exo 9 :ajouter un élément de texte dans une page HTML via JavaScript.
Exo 10 : Créer un bouton via JS, on l’affiche dans la page et au click cela déclenche une alerte
*/

//Chuck
async function getQuote() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const quote = await response.json();
    console.log(quote);
    return quote.value;
  } catch (error) {
    console.error(error.message);
  }
}
const chuck = document.getElementById("chuck");
chuck.textContent = await getQuote();

//Exo 1
let exerciceNumber = 1;
let characters = "Salut Jeff";
let isBoolean = true;

const exo1 = document.getElementById("exo1");
exo1.textContent = `${1}er exercice, chaîne : ${characters}, booléen : ${isBoolean}`;

//Exo 2
function celsiusToFarenheit(temp) {
  return temp * (9 / 5) + 32;
}

//Exo 3
function isEven(number) {
  if (number % 2 == 0) {
    console.log("Pair !");
    return true;
  } else {
    console.log("Impair !");
    return false;
  }
}

//Exo 4
function loopAndReversedLoop() {
  let index = 1;
  for (; index < 10; index++) {
    console.log(index);
  }
  for (; index > 0; index--) {
    console.log(index);
  }
}

console.log(loopAndReversedLoop());

//Exo 5
function sum(a, b) {
  return a + b;
}

//Exo 6
function hasWord(string, word) {
  return string.includes(word);
}

//Exo 7
const names = ["Siegfried", "Jill", "Mario", "Domitille", "Dante"];
for (let index = 0; index < names.length; index++) {
  const element = names[index];
  console.log(element);
}

//Exo 8
const person = {
  name: "Raymond",
  age: 48,
  city: "Toulouse",
};
console.log(
  `Il s'appelle ${person.name}, il a ${person.age} ans, il habite à ${person.city}`
);

//Exo 9
const mainElement = document.getElementById("app");
const p = document.createElement("p");
p.textContent = "Paragraphe totalement artificiel";
mainElement.appendChild(p);

//Exo 10
const button = document.createElement("button");
button.textContent = "Bouton manufacturé";
button.addEventListener("click", () => {
  alert("coucou");
});
mainElement.appendChild(button);
