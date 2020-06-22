"use strict";
var totalcomment = 0;
var totalpositive = 0;
var totalnegative = 0;
var totalneutral = 0;

var neutralpes = 0;
var positivepes = 0;
var negativepes = 0;
var totalpes = 0;

var neutrallgr = 0;
var positivelgr = 0;
var negativelgr = 0;
var totallgr = 0;

var neutralcodm = 0;
var positivecodm = 0;
var negativecodm = 0;
var totalcodm = 0;

var neutralpubgm = 0;
var positivepubgm = 0;
var negativepubgm = 0;
var totalpubgm = 0;

var neutralmlbb = 0;
var positivemlbb = 0;
var negativemlbb = 0;
var totalmlbb = 0;
fetch("Labelling/Hasil Labelling/pes.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].completions[0].result[0].value.choices[0] == "Neutral") {
                neutralpes++;
            } else if (data[i].completions[0].result[0].value.choices[0] == "Positive") {
                positivepes++;
            } else {
                negativepes++;
            };
        }
        document.getElementById("valpes").innerHTML = positivepes + ' Positive, ' + negativepes + ' Negative, and ' + neutralpes + ' Neutral Comments'; //this code dibuat dengan pusing pusing sekali, muter muter by azhar
        totalpes = positivepes + negativepes + neutralpes;
        console.log(positivepes);
        console.log(negativepes);
        console.log(neutralpes);
        console.log(totalpes);
    });

fetch("Labelling/Hasil Labelling/getrich.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].completions[0].result[0].value.choices[0] == "Neutral") {
                neutrallgr++;
            } else if (data[i].completions[0].result[0].value.choices[0] == "Positive") {
                positivelgr++;
            } else {
                negativelgr++;
            };
        }
        document.getElementById("vallgr").innerHTML = positivelgr + ' Positive, ' + negativelgr + ' Negative, and ' + neutrallgr + ' Neutral Comments'; //this code dibuat dengan pusing pusing sekali, muter muter by azhar
        totallgr = positivelgr + negativelgr + neutrallgr;
        console.log(positivelgr);
        console.log(negativelgr);
        console.log(neutrallgr);
        console.log(totallgr);
    });

fetch("Labelling/Hasil Labelling/codm.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].completions[0].result[0].value.choices[0] == "Neutral") {
                neutralcodm++;
            } else if (data[i].completions[0].result[0].value.choices[0] == "Positive") {
                positivecodm++;
            } else {
                negativecodm++;
            };
        }
        document.getElementById("valcodm").innerHTML = positivecodm + ' Positive, ' + negativecodm + ' Negative, and ' + neutralcodm + ' Neutral Comments'; //this code dibuat dengan pusing pusing sekali, muter muter by azhar
        totalcodm = positivecodm + negativecodm + neutralcodm;
        console.log(positivecodm);
        console.log(negativecodm);
        console.log(neutralcodm);
        console.log(totalcodm);
    });

fetch("Labelling/Hasil Labelling/pubgm.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].completions[0].result[0].value.choices[0] == "Neutral") {
                neutralpubgm++;
            } else if (data[i].completions[0].result[0].value.choices[0] == "Positive") {
                positivepubgm++;
            } else {
                negativepubgm++;
            };
        }
        document.getElementById("valpubgm").innerHTML = positivepubgm + ' Positive, ' + negativepubgm + ' Negative, and ' + neutralpubgm + ' Neutral Comments'; //this code dibuat dengan pusing pusing sekali, muter muter by azhar
        totalpubgm = positivepubgm + negativepubgm + neutralpubgm;
        console.log(positivepubgm);
        console.log(negativepubgm);
        console.log(neutralpubgm);
        console.log(totalpubgm);
    });

fetch("Labelling/Hasil Labelling/mlbb.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].completions[0].result[0].value.choices[0] == "Neutral") {
                neutralmlbb++;
            } else if (data[i].completions[0].result[0].value.choices[0] == "Positive") {
                positivemlbb++;
            } else {
                negativemlbb++;
            };
        }
        document.getElementById("valmlbb").innerHTML = positivemlbb + ' Positive, ' + negativemlbb + ' Negative, and ' + neutralmlbb + ' Neutral Comments'; //this code dibuat dengan pusing pusing sekali, muter muter by azhar
        totalmlbb = positivemlbb + negativemlbb + neutralmlbb;
        console.log(positivemlbb);
        console.log(negativemlbb);
        console.log(neutralmlbb);
        console.log(totalmlbb);
        totalcomment = totalpes + totallgr + totalcodm + totalpubgm + totalmlbb;
        totalpositive = positivepes + positivelgr + positivecodm + positivepubgm + positivemlbb;
        totalnegative = negativepes + negativelgr + negativecodm + negativepubgm + negativemlbb;
        totalneutral = neutralpes + neutrallgr + neutralcodm + neutralpubgm + neutralmlbb;
        document.getElementById("totcom").innerHTML = totalcomment;
        document.getElementById("totpos").innerHTML = totalpositive;
        document.getElementById("totneg").innerHTML = totalnegative;
        document.getElementById("totneut").innerHTML = totalneutral;
    });