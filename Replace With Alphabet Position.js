function alphabetPosition(str) {
    str = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    return [...str].map(e => e.charCodeAt(0) - 96).join(' ');
  }
  
  