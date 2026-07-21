export const map = { value: null }
const loadJson = async function(path) {
	return fetch(path).then(r => r.json())
}

export var boxes = []
export const main = async function() {
	if (map.value == null) map.value = 'map1'
	console.log(map.value)
	boxes = await loadJson(`./assets/maps/${map.value}.json`)
	boxes = boxes.boxes
}
		