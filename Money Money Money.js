function calculateYears(P, I, T, D) {
    var i = 0;
    while(P < D){
        P += P*I * (1-T);
        i += 1;
      }
    return i;
  }