input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . . . . #
        # . . # .
        . # # . .
        . . # . .
        . . . . .
        `)
})
input.onPinReleased(TouchPin.P0, function () {
    music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 320)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(2000)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
music.setBuiltInSpeakerEnabled(true)
