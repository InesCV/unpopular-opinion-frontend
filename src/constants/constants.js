export const statTypes = {
  CATEGORY: 'category', // avg de todos los usuarios que han respondido lo mismo que user para cada opinion de esa category
  CATEGORY_RATE: 'categoryRate', // avg de todos los usuarios que han respondido lo mismo que user para cada category
  OPINION: 'opinion', // avg de las respuestas a una opinion y además devuelve un array con los usuarios que han respondido a esa opinion
  OPINION_RATE: 'opinionRate', // avg de los que han respondido lo mismo que el usuario
  OPINION_SCORE: 'opinionScore', // avg de las respuestas a una opinion
  USER: 'user', // avg por response de las response del usuario
  USER_RATE: 'userRate', // avg del usuario en la comunidad
  MATCH_RATE: 'matchRate', // total mach percent of two users
}

export const spinnerTypes = {
  BALLS: "balls",
  BARS: "bars",
  BUBBLES: "bubbles",
  CUBES: "cubes",
  CYLON: "cylon",
  SPIN: "spin",
  SPINNING_BUBBLES: "spinningBubbles",
  SPOKES: "spokes",
};