export function fromMap(map, image) {
  return [...map.keys()].map((name) => (
    image === name ? map.get(name) : []
  ))
}
