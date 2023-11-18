function cakes(recipe, available) {
   let res = Number.POSITIVE_INFINITY;
   for (let e in recipe) {
     if (!available.hasOwnProperty(e) || available[e] < recipe[e]) { return 0 }
     else { res = Math.min(res, Math.floor(available[e] / recipe[e])) }
   }
   return res;
 }