basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) >= 100) {
        basic.showIcon(IconNames.Heart)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
