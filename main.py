hrac1 = False
hrac2 = False
hrac1speed = 0
hrac2speed = 0

pins.touch_set_mode(TouchTarget.P1, TouchTargetMode.CAPACITIVE)
pins.touch_set_mode(TouchTarget.P2, TouchTargetMode.CAPACITIVE)

show = False
sound = False
not_pressed = True

délka = randint(1, 5)*1000
def on_forever():
    console.log_value("x", délka)
    global hrac1, hrac1speed, not_pressed, hrac2, hrac2speed, sound, show
    pin1pressed = input.pin_is_pressed(TouchPin.P1)
    pin2pressed = input.pin_is_pressed(TouchPin.P2)
    console.log_value("pin1", pin1pressed)
    if pin1pressed:
        if not_pressed:
            hrac1 = True
            hrac1speed = control.millis()
            basic.show_number(1)
            not_pressed = False
    if not_pressed:
        if not_touch:
            hrac2 = True
            hrac2speed = control.millis()
            basic.show_number(2)
            not_touch = False
    if control.millis() >= délka:
        if(not_pressed and not show):
            basic.show_icon(IconNames.HEART)
            show = False
        if(not not_pressed):
            basic.show_leds("""
            . . # . .
            . . . . .
            . . # . .
            . . . . .
            . . # . .
            """)
basic.forever(on_forever)

def onIn_background():
    global sound
    if(sound):
        basic.show_number(9)
