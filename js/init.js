(function($) {
    $(function() {

        $('.button-collapse').sideNav();
        $('select').material_select();

    }); // end of document ready
})(jQuery); // end of jQuery name space

function convert() {
    var input = document.getElementById('pattern').value;
    var out = log4jpatternlayout.parse(input);
    document.getElementById('grok_pattern').value = out;
    Materialize.updateTextFields();
}