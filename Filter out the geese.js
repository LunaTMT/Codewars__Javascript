function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter((e) => geese.indexOf(e) === -1);
    // We want all the birds that are not prohibited (то есть позволенно)
  };