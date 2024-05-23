
const definitionEl = $('.definition1');

$(document).ready(function () {
  // get the data entered by the user and store it
  $('#search-tricky').click(function () {
    let trickyWord = $('#trickyWord').val().trim();
    console.log(trickyWord);

    if (trickyWord === "") {
      alert("Please enter a tricky word.");
      return;
    }
    // send the user entered word into the next function to query the api
    // and call the function
    getApi(trickyWord);
  });

  // function to query the api. value passed from event handler.
  function getApi(trickyWord) {
    // create the url and insert the searched word and the options/key
    const url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${trickyWord}`
    console.log(url);
    const options = {
      method: 'GET',
      headers: {
        //I did not have to register a credit card to get these keys
        'X-RapidAPI-Key': '5930eedbdemshc80d00e2742e6f3p162a3ejsna836c0d43ba8',
        'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
      }
    };

    fetch(url, options)
      .then(response => response.json())
      .then(response => {
        // this response generated a list of definitions, so we will just 
        // grab the first one
        let term = response.list[0];
        console.log(response);

        // set the definition to a variable and create a <p> and append to page
        let answer = term.definition;
        let definitionText = $('<p>');
        definitionText.text(answer);
        definitionEl.append(definitionText);
      })
      .catch(err => console.error(err));

  }


});

// used the Urban Dictionary API https://rapidapi.com/community/api/urban-dictionary
