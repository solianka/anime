var chips = document.querySelector(".chips");
var select = document.getElementById("genre-select");

select.addEventListener('change', () => {
    console.log(select.options[select.selectedIndex].text);
    chips.appendChild(function () {
        var _chip = document.createElement('div');

        _chip.classList.add('chip');
        _chip.addEventListener('click', chipClickHandler);

        _chip.append(
            (function () {
                var _chip_text = document.createElement('span');
                _chip_text.classList.add('chip--text');
                _chip_text.innerHTML = select.options[select.selectedIndex].text;

                return _chip_text;
            })(),
            (function () {
                var _chip_button = document.createElement('span');
                _chip_button.classList.add('chip--button');
                _chip_button.innerHTML = 'x';

                return _chip_button;
            })()
        );

        return _chip;
    }());
});

// input.addEventListener('keypress', function (event) {
//     if (event.which === 13) {

//         console.log("test");

//         chips.appendChild(function () {
//             var _chip = document.createElement('div');

//             _chip.classList.add('chip');
//             _chip.addEventListener('click', chipClickHandler);

//             _chip.append(
//                 (function () {
//                     var _chip_text = document.createElement('span');
//                     _chip_text.classList.add('chip--text');
//                     _chip_text.innerHTML = input.value;

//                     return _chip_text;
//                 })(),
//                 (function () {
//                     var _chip_button = document.createElement('span');
//                     _chip_button.classList.add('chip--button');
//                     _chip_button.innerHTML = 'x';

//                     return _chip_button;
//                 })()
//             );

//             return _chip;
//         }());
//         input.value = '';
//     }
// });

function chipClickHandler(event) {
    chips.removeChild(event.currentTarget);
}