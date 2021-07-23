let variable = 0
basic.showString("Hello!")
basic.showNumber(3)
basic.pause(500)
basic.showNumber(2)
basic.pause(500)
basic.showNumber(1)
basic.pause(500)
variable = 1
basic.forever(function () {
    if (variable == 1) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
})
