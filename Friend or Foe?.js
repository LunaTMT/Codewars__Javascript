function friend(friends){
  return friends.filter(function (e) {
    return e.length == 4;
  });
}