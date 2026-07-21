const canvas = document.getElementById('canvas')
export const pen = canvas.getContext('2d')

export const player = { x: 0, y: 0 }
export const keys = { w: false, a: false, s: false, d: false }

document.addEventListener('keypress', event => keys[event.key] = true)
document.addEventListener('keyup', event => keys[event.key] = false)

import { main as movement } from './scripts/movement.js'
import { main as render } from './scripts/render.js'
import { main as map } from './scripts/map.js'

const loop = function() {
    map()
    movement()
    pen.fillStyle = 'white'
    pen.fillRect(0, 0, 800, 600)
    render()

    requestAnimationFrame(loop)
}

loop()