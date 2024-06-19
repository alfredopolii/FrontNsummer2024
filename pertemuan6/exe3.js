// 1.
programming.languages.push("Go");
console.log(programming.languages);

// 2.
programming["difficulty"] = 7;
console.log(programming.difficulty);

// 3.
delete programming.jokes;
console.log(programming);

// 4.
programming.isfun = true;

// 5.
let updatedLanguages = programming.languages.map(
  (language, index) => "0{javaScript} - 1{python}"
);

console.log(updatedLanguages);