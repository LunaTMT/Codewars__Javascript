function titleCase(str, exclude) {
    if (!str) return "";
    
    exclude = exclude ? exclude.toLowerCase().split(' ') : [];
    
    str = str
      .toLowerCase()
      .split(' ')
      .map(e => exclude.includes(e) ? e.toLowerCase() : e[0].toUpperCase() + e.substring(1).toLowerCase())
      .join(' ');
  
    return str.charAt(0).toUpperCase() + str.substring(1);
  }
  