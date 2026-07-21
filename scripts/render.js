import { pen, keys, player } from '../main.js'
import { boxes } from './map.js'

const images = {
    up1: new Image(), up2: new Image(),
    down1: new Image(), down2: new Image(),
    left1: new Image(), left2: new Image(),
    right1: new Image(), right2: new Image()
}

var calledInit = false
const init = function() {
    calledInit = true
    images.up1.src = './assets/images/blinky-up-p1.png'
    images.up2.src = './assets/images/blinky-up-p2.png'
    images.down1.src = './assets/images/blinky-down-p1.png'
    images.down2.src = './assets/images/blinky-down-p2.png'
    images.left1.src = './assets/images/blinky-left-p1.png'
    images.left2.src = './assets/images/blinky-left-p2.png'
    images.right1.src = './assets/images/blinky-right-p1.png'
    images.right2.src = './assets/images/blinky-right-p2.png'
}

var lastKey = null
var tick = 0

export const main = function() {
    if (!calledInit) init()

    if (keys.w || keys.a || keys.s || keys.d) tick = (tick + 0.25) % 2

    if (!keys[lastKey]) {
        if (keys.w) lastKey = 'w'
        if (keys.a) lastKey = 'a'
        if (keys.s) lastKey = 's'
        if (keys.d) lastKey = 'd'
    }

    var image
    if (tick <= 1) {
        if (lastKey == 'w') image = images.up1
        if (lastKey == 'a') image = images.left1
        if (lastKey == 's') image = images.down1
        if (lastKey == 'd') image = images.right1
    } else {
        if (lastKey == 'w') image = images.up2
        if (lastKey == 'a') image = images.left2
        if (lastKey == 's') image = images.down2
        if (lastKey == 'd') image = images.right2
    }

    var mboxes = (boxes == undefined) ? [] : boxes

    pen.fillStyle = 'red'
    for (var box of mboxes) {
        pen.fillRect(box.x + 400 - player.x, box.y + 300 - player.y, box.w, box.h)
    }

    if (!image) image = images.right1
    pen.drawImage(image, 400 - 14 * 2, 300 - 14 * 2, 14 * 4, 14 * 4)
}
