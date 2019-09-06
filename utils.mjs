export function StopWatch() {
    var startTime = null;
    var stopTime = null;
    var running = false;

    function getTime() {
        var day = new Date();
        return day.getTime();
    }
    this.start = function () {
        if (running == true) return;
        else if (startTime != null) stopTime = null;

        running = true;
        startTime = getTime();
    };
    this.stop = function () {
        if (running == false) return;

        stopTime = getTime();
        running = false;
        log.apply(this);
    };

    function duration() {
        if (startTime == null || stopTime == null) return "Undefined";
        else return (stopTime - startTime) / 1000;
    }

    function durationMilli() {
        if (startTime == null || stopTime == null) return "Undefined";
        else return stopTime - startTime;
    }

    function log() {
        // console.log(duration() + 'seconds')durationMilli()
        console.log(durationMilli() + " milliseconds");
    }
}
// https://jakearchibald.com/2017/es-modules-in-browsers/
// utils.mjs
export function addTextToBody(text) {
    const div = document.createElement('div');
    div.textContent = text;
    document.body.appendChild(div);
}

//
// Supported:
// import {foo} from 'https://jakearchibald.com/utils/bar.mjs';
// import {foo} from '/utils/bar.mjs';
// import {foo} from './bar.mjs';
// import {foo} from '../bar.mjs';

// // Not supported:
// import {foo} from 'bar.mjs';
// import {foo} from 'utils/bar.mjs';

{/* <script type="module" src="module.mjs"></script>
<script nomodule src="fallback.js"></script>

<!-- This script will execute after… -->
<script type="module" src="1.mjs"></script>

<!-- …this script… -->
<script src="2.js"></script>

<!-- …but before this script. -->
<script defer src="3.js"></script> */}
