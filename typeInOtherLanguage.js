// Load the Google Transliterate API
google.load("elements", "1", {
    packages: "transliteration"
});


$.fn.typeInOtherLanguage = function(options) {

    var control;
    function onLoadLanguage(options) {

        var lang = options.language;


        switch(lang)
        {
            // Supported languages are - 
            // AMHARIC, ARABIC, BENGALI, CHINESE, GREEK, GUJARATI, HINDI, KANNADA, MALAYALAM, MARATHI, NEPALI
            // ORIYA, PERSIAN, PUNJABI, RUSSIAN, SANSKRIT, SERBIAN, SINHALESE, TAMIL, TELUGU, TIGRINYA, URDU
            
            // I have written only 3 cases, you can have these many cases below as per the projects need.
            
            case 'MARATHI':

                var langOptions = {       
                      sourceLanguage:                          
                          google.elements.transliteration.LanguageCode.ENGLISH,
                      destinationLanguage:
                          [google.elements.transliteration.LanguageCode.MARATHI],
                      shortcutKey: 'ctrl+g',
                      transliterationEnabled: true
                };

                break;

            case 'TAMIL':

                var langOptions = {       
                      sourceLanguage:                          
                          google.elements.transliteration.LanguageCode.ENGLISH,
                      destinationLanguage:
                          [google.elements.transliteration.LanguageCode.TAMIL],
                      shortcutKey: 'ctrl+g',
                      transliterationEnabled: true
                };

                break;

             case 'GUJARATI':

                var langOptions = {       
                      sourceLanguage:                          
                          google.elements.transliteration.LanguageCode.ENGLISH,
                      destinationLanguage:
                          [google.elements.transliteration.LanguageCode.GUJARATI],
                      shortcutKey: 'ctrl+g',
                      transliterationEnabled: true
                };

                break;

             default:

                var langOptions = {       
                      sourceLanguage:                          
                          google.elements.transliteration.LanguageCode.ENGLISH,
                      destinationLanguage:
                          [google.elements.transliteration.LanguageCode.ENGLISH],
                      shortcutKey: 'ctrl+g',
                      transliterationEnabled: true
                };

                break;

        }

        // Create an instance on TransliterationControl with the required
        // options.
        control =
          new google.elements.transliteration.TransliterationControl(langOptions);

        // Enable transliteration in the textbox with id
        // 'transliterateTextarea'.
        $(options.arr_input_ids).each(function(index, value) {

            control.makeTransliteratable([value]);
            $("#"+value).animate(
                                  {
                                      "boxShadow": "0px 0px 5px yellow",
                                      "fontSize":options.font_size
                                      
                                  }, "slow" 
                                );

        });

    }

    // toggle between regional langage and english
    $("#checkboxId").click(function(){
        control.toggleTransliteration();
    });


    onLoadLanguage(options);

    return this;
};
