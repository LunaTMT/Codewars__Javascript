const printerError = s => {
    const matches = s.match(/[^a-m]/g)
    return `${matches? matches.length : 0}/${s.length}`
  }