def on_forever():
    if pins.digital_read_pin(DigitalPin.P1) == 1:
        basic.show_icon(IconNames.HEART)
        pins.digital_write_pin(DigitalPin.P1, 1)
    else:
        basic.show_icon(IconNames.SMALL_HEART)
        pins.digital_write_pin(DigitalPin.P1, 0)
basic.forever(on_forever)
