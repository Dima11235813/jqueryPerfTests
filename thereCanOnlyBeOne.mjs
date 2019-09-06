import { StopWatch } from "./utils.mjs";

// import * as name from "module-name";
// import * as core from "./node_modules/jquery/dist/core.js"

export function monoClass() {
    //start a timer
    let stopWatch = new StopWatch
    stopWatch.start()
    //add button container
    let body = $("body")
    let containerText = `<div id="container"></div>`
    body.append(containerText)
    //add buttons
    let counter = 0
    let buttons = ""
    let buttonText = "CLICK ME"
    //for performance testing
    let oneHundred = 100
    let oneThousand = 1000
    let oneMillion = 100000
    let tenMillion = 1000000
    //create the html for the buttons
    do {
        //onClick="clickHandler()"
        buttons += `<button class="myButton button_${counter}">${buttonText}</button>`
        counter += 1
    }
    while (counter < oneHundred)
    let container = $('#container')
    container.append(buttons)
    //set up event hanlder function 
    function handleContainerClick(e) {
        let target = e.target
        if (target.localName === "button") {
            let alertNumber = target.className.split('_')[1]
            alert('You clicked button ' + alertNumber)
        }
    }
    //add event list3ent
    //EITHER
    // Bind to container 
    // container.on('click', handleContainerClick)

    //or each button
    let allButtons = $(".myButton")
    allButtons.click(handleContainerClick)
    stopWatch.stop()
}

//results
//oneHundered
//container event
//3
//bind via $('buttonClassSelector').click(function(){})
//3

//oneThousand 
//container event
//10
//bind via $('buttonClassSelector').click(function(){})
//21

//one million
//container event
// 976 milliseconds
// jquery.js:99 [Violation] 'DOMContentLoaded' handler took 2890ms
// [Violation] Forced reflow while executing JavaScript took 2881ms
//bind via $('buttonClassSelector').click(function(){})
//1786 milliseconds
// jquery.js:99 [Violation] 'DOMContentLoaded' handler took 2824ms
// [Violation] Forced reflow while executing JavaScript took 2815ms

// tenMillion
//container event
// 20409 milliseconds
// jquery.js:99 [Violation] 'DOMContentLoaded' handler took 30785ms
// [Violation] Forced reflow while executing JavaScript took 29709ms

//bind via $('buttonClassSelector').click(function(){})
//Maximum call stack size exceeded


