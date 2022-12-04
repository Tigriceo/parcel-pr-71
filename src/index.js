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
    });
}


/**
 * Input mask
 */
var element = document.getElementById('selector');
var maskOptions = {
    mask: '+{3}(000)000-00-00'
};
var mask = IMask(element, maskOptions);