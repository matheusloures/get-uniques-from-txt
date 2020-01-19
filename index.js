var colorutils = require('colorutils');

function checkWord(str){
    
    str = str.replace(/(\n|\r)/g," ");
    str = str.replace(/\./g,' ')
    str = str.replace(/\,/g,' ')
    str = str.replace(/\-/g,' ')
    str = str.replace(/\!/g,' ')
    str = str.replace(/\?/g,' ')
    str = str.replace(/\!/g,' ')
    str = str.replace(/\(/g,' ')
    str = str.replace(/\)/g,' ')
    str = str.replace(/\;/g,' ')
    let collection = {};
    let words = str.split(' ');
    words.forEach((word) => {
       collection[word] = word;
     });
    for (var i = 0; i < words.length; i++) {
      if (words[i] === collection[words[i]]) {
        collection[words[i]] = 0;
      }
    }
    let total = words.reduce((occurrences, word) => {
      collection[word]++
      return collection;
    }, 0);
      colorutils.write(total, './haddad.json')
    };

    var palavras = require('./haddad.json');
    
    var a = Object.keys(palavras[0]);
    var arr = []
    for (let i = 0;i<a.length;i++){
        var retrieve = palavras[0][a[i]]
           arr.push({word: a[i], quantity: palavras[0][a[i]]})
    }
    arr.sort(function(a, b) {
        return parseFloat(b.quantity) - parseFloat(a.quantity);
    });
    colorutils.write(arr, './count_haddad.json')


    function genHtmlTable(){

        var palavras = require('./count_haddad.json')

        var p = palavras;

        // console.log(palavras);

        var text;
        for(let i = 0 ; i<palavras.length;i++){

            var tableRow = `<tr>
            <td>#`+i+`</td>
            <td>`+p[i]['word']+`</td>
            <td>`+p[i]['quantity']+`</td>
            </tr>`;
            text+=tableRow
            console.log(tableRow)
        }
        write.write(text, './haddad.html')
        
        //see the data on an html generated table
    }
