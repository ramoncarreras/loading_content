import {Page, Loading, NavController} from 'ionic-angular';
import {CountDown} from '../../components/countdown.component'


@Page({
    templateUrl: 'build/pages/home/home.html',
    directives: [CountDown]
})
export class HomePage {
    constructor(private nav: NavController) {
        this.nav = nav;
    }

    /**
     * shows simple html content loading overlay
     */
    showLoading() {
        let loading = Loading.create({
            content: "<h4>Loading</h4> content <small style='color: red;'>with</small> html <b>TAGS</b>",
            duration: 3000
        });
        this.nav.present(loading);
    }

    /**
     * shows custom loading overlay with count-down component
     */
    showCustomLoading() {
        // FIXME: Countdown doesn't work inside loading component
        let loading = Loading.create({
            content: "Custom loading with a countdown:  <count-down initial='255'></count-down>",
            duration: 3000
        });
        this.nav.present(loading);
    }

}
