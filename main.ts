input.onButtonPressed(Button.A, function () {
    radio.sendString("Hi")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("!ERROR!")
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(11)
})
radio.setGroup(11)
