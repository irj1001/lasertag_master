namespace lasertag_master {

    //% block="setup |lives $lives|"
    export function setup_master(lives: number) {
        radio.setTransmitPower(1)
        let team=1
        input.onButtonPressed(Button.A, function() {
            if (team==1){
                team=2
            }
            else{team=1}
        })

        basic.forever(function () {

            basic.showNumber(team)
            radio.setGroup(team)



        })
    }


    

}

