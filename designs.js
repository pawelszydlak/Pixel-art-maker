
const table = $('#pixelCanvas');

function makeGrid() {
    const height = $('#inputHeight').val();
    const width = $('#inputWidth').val();
    

    table.children().remove();

    for (let i = 0; i < height; i++) {
        table.append('<tr></tr>');
        for (let j = 0; j < width; j++) {
            table.children().last().append('<td></td>');
        }
    }
}

function colorInput() {
    $(table).on('click', 'td', function() {
        let pickedColor = $('#colorPicker').val();
        $(this).css('background', pickedColor);
    });

    $(table).on('dblclick', 'td', function() {
        $(this).css('background', 'transparent');
    });
}

function clear() {
    table.html('');
}

$(document).ready(function() {
    $('#sizePicker').submit(function(k) {
        k.preventDefault();
        clear();
        makeGrid();
        colorInput();
    });
});