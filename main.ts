let hrac1 = false
let hrac2 = false
let hrac1speed = 0
let hrac2speed = 0
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
let show = false
let sound = false
let not_pressed = true
let délka = randint(1, 5) * 1000
basic.forever(function on_forever() {
    let not_touch: boolean;
    console.logValue("x", délka)
    
    let pin1pressed = input.pinIsPressed(TouchPin.P1)
    let pin2pressed = input.pinIsPressed(TouchPin.P2)
    console.logValue("pin1", pin1pressed)
    if (pin1pressed) {
        if (not_pressed) {
            hrac1 = true
            hrac1speed = control.millis()
            basic.showNumber(1)
            not_pressed = false
        }
        
    }
    
    if (not_pressed) {
        if (not_touch) {
            hrac2 = true
            hrac2speed = control.millis()
            basic.showNumber(2)
            not_touch = false
        }
        
    }
    
    if (control.millis() >= délka) {
        if (not_pressed && !show) {
            basic.showIcon(IconNames.Heart)
            show = false
        }
        
        if (!not_pressed) {
            basic.showLeds(`
            . . # . .
            . . . . .
            . . # . .
            . . . . .
            . . # . .
            `)
        }
        
    }
    
})
function onIn_background() {
    
    if (sound) {
        basic.showNumber(9)
    }
    
}

