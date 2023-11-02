// write the function isAnagram
var isAnagram = function(test, org) {
    test = test.replace(/[^a-zA-Z]/g, '').toLowerCase();
    org = org.replace(/[^a-zA-Z]/g, '').toLowerCase();
    return test.split('').sort().join('') == org.split('').sort().join('')
  };
  