function shortcut (string) {
    const non_vowels = string.match(/[^aeiou]/g)
    return non_vowels? non_vowels.join('') : ''
  }