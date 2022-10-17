function calculateRialia() {

    let galatia = document.getElementById('galatia').value
    let ifi = document.getElementById('ifigenia').value
    let chris = document.getElementById('christopher').value

    if (galatia == "") {
        galatia = 0;
    } else {
        galatia = parseFloat(galatia);
    }
    if (ifi == "") {
        ifi = 0;
    } else {
        ifi = parseFloat(ifi);
    }
    if (chris == "") {
        chris = 0;
    } else {
        chris = parseFloat(chris);
    }

    // galatia = 13
    // ifi = 5;
    // chris = 0;

    console.log('galatia: ' + galatia);
    console.log('ifi: ' + ifi);
    console.log('chris: ' + chris);

    let array = [{
            'name': 'Galatia',
            'price': galatia,
        },
        {
            'name': 'Ifi',
            'price': ifi,
        },
        {
            'name': 'Chris',
            'price': chris,
        },
    ];

    let sinolo = 0;

    for (let i = 0; i < array.length; i++) {
        sinolo = sinolo + array[i]['price'];
    }



    console.log('sinolo: ' + sinolo);
    let stonKathena = sinolo / 3;
    console.log('stonKathena: ' + stonKathena);

    // let ipolipoGalatia = galatia;
    // let ipolipoIfi = ifi;
    // let ipolipoChris = chris;


    let resultString = [];

    for (let i = 0; i < array.length; i++) {
        // o i xrosti riallia kapoiou
        if (array[i]['price'] < stonKathena) {
            let exportMoney = stonKathena - array[i]['price'];

            for (let j = 0; j < array.length; j++) {
                if (j == i) {
                    continue;
                }
                // an o j edoke pano pou stonKathena tote o j prepi na pari piso lefta
                if (array[j]['price'] > stonKathena) {
                    // an exportMoney exi perissotera apo ta lefta pou prepi na pari piso o j tote
                    if (exportMoney > (array[j]['price'] - stonKathena)) {

                        exportMoney = exportMoney - (array[j]['price'] - stonKathena);
                        resultString.push(array[i]['name'] + ' : ' + (array[j]['price'] - stonKathena) + ' => ' + array[j]['name']);
                        array[j]['price'] = stonKathena;
                    } else {
                        resultString.push(array[i]['name'] + ' : ' + exportMoney + ' => ' + array[j]['name']);
                        array[j]['price'] = (array[j]['price']) - exportMoney;
                        exportMoney = 0;
                        break;
                    }
                } else {
                    // O J XROSTI KAI EKINOS
                    // console.log('hi')
                }



            }
        }


    }

    let htmlSrteing = "";
    for (let i = 0; i < resultString.length; i++) {
        htmlSrteing = htmlSrteing + "<div> "+resultString[i]+" </div>";
    }
    document.getElementById('results').innerHTML =htmlSrteing;




}