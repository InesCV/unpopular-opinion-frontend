export const statTypes = {
  CATEGORY: 'category', // avg de todos los usuarios que han respondido lo mismo que user para cada opinion de esa category
  CATEGORY_RATE: 'categoryRate', // avg de todos los usuarios que han respondido lo mismo que user para cada category
  OPINION: 'opinion', // avg de las respuestas a una opinion y además devuelve un array con los usuarios que han respondido a esa opinion
  OPINION_RATE: 'opinionRate', // avg de los que han respondido lo mismo que el usuario
  OPINION_SCORE: 'opinionScore', // avg de las respuestas a una opinion
  USER: 'user', // avg por response de las response del usuario
  USER_RATE: 'userRate', // avg del usuario en la comunidad
  MATCH_RATE: 'matchRate', // total mach percent of two users
  IN_MY_ZONE_RATE: 'inMyZoneRate', // avg de las respuestas del usuario en la zona
  IN_MY_ZONE_CATEGORY: 'inMyZoneCategory', // avg por category del usuario en la zona
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

export const errorTypes = {
  E404: "Page not found.",
  E404U: "User not found.",
  E405U: "User couldn't be updated.",
  E422: "User already exist.",
  E500: "Can't connect to API.",
  E500C: "Categories couldn't be download from the API",
  E500S: "Stats couldn't be downloaded from the API",
  E600: "Can't connect to the Cloud.",
  E600U: "Can't upload image to the Cloud.",
};

// Custom message by acepptance rate in place (InMyZone)
export const imzMessages = {
  rnobody: "You are the only Uoper in the area (500 meters). We can't help you. You are alone.", // If there is no upers nearby, r will be 100% (but is not real)
  r10: "Your thoughts are not popular in this zone, better keep your mouth shut...",
  r30: "Maybe someone will laugh at your jokes, but be careful...",
  r60: "Lucky! You are in a safe zone, go and meet other interesting Uopers.",
  r90: "Uoh! You are the soul of the party. Fell free to share your thoughts! They are accepted here",
  r100: "You are 'The Wolf of Wall Street'. All the Uopers in this place want to hear about your thoughts.",
}
