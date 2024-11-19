let heroi = {
    nome: "Fade",
    xp: 1337,
    nivel: "",
};

switch (true) {
    case (heroi.xp > 1000 && heroi.xp < 2001):
        heroi.nivel = "Bronze"
        break;
    case (heroi.xp > 2000 && heroi.xp < 5001):
        heroi.nivel = "Prata"
        break;
    case (heroi.xp > 5000 && heroi.xp < 7001):
        heroi.nivel = "Ouro"
        break;
    case (heroi.xp > 7000 && heroi.xp < 8001):
        heroi.nivel = "Platina"
        break;
    case (heroi.xp > 8000 && heroi.xp < 9001):
        heroi.nivel = "Ascendente"
        break;
    case (heroi.xp > 9000 && heroi.xp < 10001):
        heroi.nivel = "Imortal"
        break;
    case (heroi.xp > 10001):
        heroi.nivel = "Radiante"
        break;
    default:
        heroi.nivel = "Ferro"
        break;
}

console.log(`O Herói de nome ${heroi.nome} está no nível de ${heroi.nivel}`);