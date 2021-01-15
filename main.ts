input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    vcolor += 10
})
let range_pos = 0
let range: neopixel.Strip = null
let vcolor = 0
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.forever(function () {
    range = strip.range(range_pos, 2)
    range.showColor(neopixel.hsl(vcolor, 100, 20))
    strip.clear()
    range_pos += 1
    range_pos = range_pos % 7
    basic.pause(100)
})
