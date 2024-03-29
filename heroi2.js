
let nome = "Gabriel"
let nivelHeroi = 1000
let nomeNivel = '';

if (nivelHeroi <= 1000) {
  nomeNivel = "Ferro";
  
} else if (nivelHeroi <= 2000) {
  nomeNivel = "Bronze";
} else if (nivelHeroi <= 5000) {
  nomeNivel = "Prata";
} else if (nivelHeroi <= 7000) {
  nomeNivel = "Ouro";
} else if (nivelHeroi <= 8000) {
  nomeNivel = "Platina";
} else if (nivelHeroi <= 9000) {
  nomeNivel = "Ascendente";
} else if (nivelHeroi <= 10000) {
  nomeNivel = "Imortal";
} else {
  nomeNivel = "Radiante";
}

console.log(`O herói de nome ${nome} está no nível: ${nomeNivel}`);
