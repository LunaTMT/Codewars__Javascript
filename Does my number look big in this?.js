function narcissistic(value) {
    value = value.toString()
    const n = value.length
    return [...value].map(e => parseInt(e)**n).reduce((acc, e) => acc+e) == value
  }