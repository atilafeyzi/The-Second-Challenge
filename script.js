// Callenge: Capitalize first letter of a text
const text = "hi; I am Atila";
const firstLetter = text.charAt(0);
const upperCaseFirstLetter = firstLetter.toUpperCase();
const finalText = text.replace(firstLetter, upperCaseFirstLetter);
console.log(finalText);
