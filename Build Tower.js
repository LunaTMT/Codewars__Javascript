function towerBuilder(floors, currentFloor=0, arr=[]) {
    if (currentFloor === floors) return arr
    let spaces = ' '.repeat(floors - currentFloor - 1)
    let stars = '*'.repeat((2 * currentFloor) + 1)
    return towerBuilder(floors, currentFloor+1, [...arr, spaces + stars + spaces])
  }