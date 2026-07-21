import { keys, player } from '../main.js'
import { boxes, map } from './map.js'

const collide = function(box) {
    return (
        player.x - 14 * 2 <= box.x + box.w &&
        player.y - 14 * 2 <= box.y + box.h &&
        player.x - 14 * 2 + 14 * 4 >= box.x &&
        player.y - 14 * 2 + 14 * 4 >= box.y )
}

const collidelist = function(boxes) {
    var bool = false
    for (var box of boxes) { bool = (collide(box) || bool) }
    return bool
}

export const main = function() {
    var walls = []
    try { walls = boxes.filter(box => Object.keys(box.special).length == 0) }
    catch {  walls = [] }

    if (keys.w) {
        player.y -= 5
        if (collidelist(walls)) {
            player.y += 5
        }
    }

    if (keys.a) {
        player.x -= 5
        if (collidelist(walls)) {
            player.x += 5
        }
    }

    if (keys.s) {
        player.y += 5
        if (collidelist(walls)) {
            player.y -= 5
        }
    }

    if (keys.d) {
        player.x += 5
        if (collidelist(walls)) {
            player.x -= 5
        }
    }

    var tpers = null
    try { tpers = boxes.filter(box => 'teleport' in box.special) }
    catch { tpers = [] }
    for (var tper of tpers) {
        if (collide(tper)) {
            map.value = tper.special.teleport
        }
    }
}