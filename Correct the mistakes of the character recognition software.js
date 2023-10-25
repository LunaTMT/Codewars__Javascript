function correct(str)
{
  const patterns = {
    "5" : "S",
    "0" : "O",
    "1" : "I"
  };
	for (const p in patterns){
    str = str.replace(RegExp(p, "g"), patterns[p])
  };
  return str
}