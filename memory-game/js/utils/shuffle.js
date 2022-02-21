export const shuffle = (array, number) => {
    array.forEach(elem => {
        let ramdomPos = Math.floor(Math.random() * number);
        elem.style.order = ramdomPos;
    });
};