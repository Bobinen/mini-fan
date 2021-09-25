basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) >= 100) {
        basic.showIcon(IconNames.Heart)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showIcon(IconNames.SmallHeart)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
