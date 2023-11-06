function combat(health, damage) {
  health -= damage
  return health < 0? 0: health
}