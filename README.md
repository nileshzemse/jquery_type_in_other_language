## <a id="Introduction"></a>Introduction

**typeInOtherLanguage** is a jQuery plugin that allows users to type in other languages like Marathi, Tamil, Gujarati, etc.

## Getting Started

Include jQuery, the plugin's JS file, google's transliteration library on a page. Add a textbox or textarea fields in your form. 
Give id to these fields.

Then call the `typeInOtherLanguage` method with the required options

```includes
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
This meta tag is required so that utf encoded characters of other/regional language would be visible on the web-page.

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.0/jquery.min.js"></script>
JQuery library file

<script type="text/javascript" src="https://www.google.com/jsapi"></script>
We require a google's transliteration library

<script type="text/javascript" src="typeInOtherLanguage.js"></script>
include plugin file


```html
<div><textarea rows="5" cols="45" name="txt_msg1" id="txt_msg1"></textarea></div>
<div><textarea rows="5" cols="45" name="txt_msg2" id="txt_msg2"></textarea></div>
<div><textarea rows="5" cols="45" name="txt_msg3" id="txt_msg3"></textarea></div>

<script>

        $(document).ready(function(){
          
        // put ids of text area onto array, 
        // when user would be able to type in other language in these text-area fields.

        arr_input_ids = new Array("txt_msg1", "txt_msg2");
        
            $( this ).typeInOtherLanguage(
                {
                "language":"MARATHI",
                "font_size":15,
                "arr_input_ids" : arr_input_ids,
                }
            );
            
        });       
      
        </script>
```

``` Demo
run the file demo.html to try the plugin.

## <a id="License"></a>License

Copyright (c) 2014 Nilesh Zemse
Licensed under the MIT and GPLv3 license.

``` Reference URL:
https://developers.google.com/transliterate/v1/getting_started#hiworld
