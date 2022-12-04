import IMask from 'imask';
import './js/modals';
//import NiceSelect from "nice-select2";


/**
 * Nice select
 */
const selects = document.querySelectorAll('.js-select');
for (let i = 0; i < selects.length; i++) {
    const select = selects[i];
    NiceSelect.bind(select, {
        //options
        //searchable: true,
    });
}


/**
 * Input mask
 */
var phoneInput = document.getElementById('phone-selector');
var maskOptions = {
    mask: '+{38}(000)000-00-00'
};
var mask = IMask(phoneInput, maskOptions);