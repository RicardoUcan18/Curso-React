import heroes, { owners } from '../data/heroes';

export const getHeroeById = (id) => {
  return heroes.find((e) => e.id == id);
}

//console.log( getHeroeById(1));

export const getHeroesByOwner = (owner) => {
  return heroes.filter((e) => e.owner == owner);
}
//console.log( getHeroesByOwner('DC'), owners );