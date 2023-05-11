basic.forever(function () {
    if (input.temperature() > 30) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.showString("" + (input.temperature()))
    }
})
