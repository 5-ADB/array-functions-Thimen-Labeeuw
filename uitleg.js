//array at() = zoekt de variabele op die plaats bv.
const fruitmand = ["appel", "peer", "kiwi", "banaan"];
console.log(fruitmand.at(2)); //maak een log van het tweede item vanaf nul geteld hier "kiwi"
console.log("------------------------------");

//aray join() = voegt alle woorden aan elkaar toe met een specefiek teken ertussen
console.log(fruitmand.join("*")); //gaat alle woorden na elkaar zetten met een * ertusssen
console.log("------------------------------");

//array pop() = verwijderd het laatste element van een array
fruitmand.pop();
console.log(fruitmand);
console.log("------------------------------");

//array push() = voegt een nieuw element aan het einde toe van een array
fruitmand.push("banaan");
console.log(fruitmand);
console.log("------------------------------");

//array shift() = verwijderd het eerste element en shuift alles op
fruitmand.shift();
console.log(fruitmand);
console.log("------------------------------");

//array unshift() = voegt een nieuw element toe aan het begin en shuift alles op
fruitmand.unshift("tomaat");
console.log(fruitmand);
console.log("------------------------------");

//array delete() = verwijderd een element en zet er undifined
delete fruitmand[2];
console.log(fruitmand);
console.log("------------------------------");

//array concat() = voegt twee arrays samen
let groentenmand = ["sla", "paprika", "komkommer"];

groentenEnFruitMand = fruitmand.concat(groentenmand);
console.log(groentenEnFruitMand);
console.log("------------------------------");

//array copyWithin() = kopieert een bepaald aantal elementen op een bepaalde plaats
console.log(fruitmand.copyWithin(2, 0)); //gaat de items van 0 tot 2 kopieren vanaf 2
console.log("------------------------------");

//array flat() =  gaat een bepaald van niveau van haakjes negeren
const nummers = ["1", "2", ["3", "4"]];
console.log(nummers.flat());
console.log("------------------------------");

//array splice() = gaat een nieuw element toevoegen op een bepaalde plaats
fruitmand.splice(2, 0, "meloen");
console.log(fruitmand);
console.log("------------------------------");

//array toSpliced() = creert een nieuwe array met op die plaats het nieuwe element en houd de oude
console.log(fruitmand.toSpliced(0, 2, "perzik"));
console.log(`oude array: ${fruitmand}`);
console.log("------------------------------");

//array slice() = plakt een stuk van je array bij een andere
groentenmand += fruitmand.slice(0, 1);
console.log(groentenmand);
