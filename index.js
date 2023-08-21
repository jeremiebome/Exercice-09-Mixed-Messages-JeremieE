// function gen_citation(){
//   const citation = ["La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.","Aucun de nous, en agissant seul, ne peut atteindre le succès.","Un gagnant est juste un rêveur qui n'a jamais cédé."];
//   const index = Math.floor(Math.random() * citation.length);
//   const text = citation[index];
//   console.log(citation[index]);

// }
function gen_citation() {
  const citation = ["La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.", "Aucun de nous, en agissant seul, ne peut atteindre le succès.", "Un gagnant est juste un rêveur qui n'a jamais cédé."];
  setInterval(() => {
    const index = (Math.random() * citation.length | 0) ;
  
    console.log(citation[index]);
  }, 3000);
//last commit

}
gen_citation();