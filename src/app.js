export function sortHeroesByHealth(heroesArray) {
    return heroesArray.sort((a,b) => b.health-a.health)
}
