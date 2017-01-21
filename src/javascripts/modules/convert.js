// (function($) {
//     $(function() {

//         $('.button-collapse').sideNav();
//         $('select').material_select();

//     }); // end of document ready
// })(jQuery); // end of jQuery name space


export default class Convert {
    constructor(el) {
        el.style.display = none

        if (el.nodeName.match(/\b(A|BUTTON)\b/i)) {
            el.onClick = convert('', 'pattern', 'grok_pattern');
        } else if (el.nodeName.match(/\b(SELECT|INPUT)\b/i)) {
            el.onChange = convert('', 'pattern', 'grok_pattern');
        } else {
            console.log('ERROR: Convert not applicable to element of type:' + el.nodeName + '[id=' + el.id + ']')
        }
    }

    convert(typeId, inId, outId) {
        var input = document.getElementById(inId).value;
        var out = log4jpatternlayout.parse(input);
        document.getElementById(outId).value = out;

        Materialize.updateTextFields();
    }

}