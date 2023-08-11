// function gen_citation(){
//   const citation = ["La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.","Aucun de nous, en agissant seul, ne peut atteindre le succès.","Un gagnant est juste un rêveur qui n'a jamais cédé."];
//   const index = Math.floor(Math.random() * citation.length);
//   const text = citation[index];
//   console.log(citation[index]);

// }
function gen_text() {
  const citation = ["La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.", "Aucun de nous, en agissant seul, ne peut atteindre le succès.", "Un gagnant est juste un rêveur qui n'a jamais cédé."];
  setInterval(() => {
    const text = Math.floor(Math.random() * citation.length);
    const index = citation[text];
    console.log(citation[text]);
  }, 3000);
//last commit

}
gen_text();