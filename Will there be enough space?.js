function enough(cap, on, wait) {
    total = on + wait
    return (total < cap)? 0: Math.abs(cap - total)
  }

