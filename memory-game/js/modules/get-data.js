import {deleteTableTemplate} from './delete-template.js';
import {createTableTemplate} from './create-table-template.js';
import {compare} from '../utils/compare.js';

export const getData = (array) => {
    deleteTableTemplate();

    array.sort(compare('time'));
    array.sort(compare('moves'));

    for (let index = 0; index < array.length; index++) {
        if (index < 10) {
            createTableTemplate(array[index], index)
        }
    };
};