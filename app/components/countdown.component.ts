import {NavController} from 'ionic-angular';
import {Component} from "angular2/core";

@Component({
    selector: 'count-down',
    template:   '{{counter}}',
    inputs: ['initial']
})

export class CountDown {
    initial: string;
    counter: number;
    interval: any;

    constructor(private nav: NavController) {
        this.nav = nav;

        this.interval = setInterval(()=>{
            if(this.counter > 0) {
                this.counter -= 1;
                if(this.counter == 0) {
                    this.stop();
                }
            }
        }, 1000);
    }

    ngOnInit() {
        this.counter = parseInt(this.initial);
    }

    stop() {
        clearInterval(this.interval);
    }

}