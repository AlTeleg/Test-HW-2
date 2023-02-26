import { sortHeroesByHealth } from "../src/app"

const heroesTestArray = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80}
]

const sortedHeroesTestArray = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10}
]

test('sort heroes in array by health test', () => {
    const result = sortHeroesByHealth(heroesTestArray);
    expect(result).toEqual(sortedHeroesTestArray);
})