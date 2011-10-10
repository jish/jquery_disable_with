
# jQuery disable with

A jQuery plugin to disable buttons when you click on them. This is to prevent
forms from being submitted multiple times.

## Usage

Just add a `data-disable-with` attribute to your button.

    <input type="button" data-disable-with="submitting...">

Or dynamically disable a jQuery object.

    $('#button').disableWith('submitting...');
