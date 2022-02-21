export const deleteTableTemplate = () => {
    const tableRows = document.querySelectorAll('.score__row');
    if (tableRows) {
        tableRows.forEach(row => row.remove());
    }
};