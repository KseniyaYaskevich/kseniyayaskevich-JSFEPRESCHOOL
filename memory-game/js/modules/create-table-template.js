const tableBody = document.querySelector('.score__body');

export const createTableTemplate = (elem, index) => {
    let tableItem =
        `<tr p class="score__row">
            <td>
                <p class="score__username">${index+1}) ${elem.userName}</p>
            </td>
            <td>
                <p class="score__moves">${elem.moves}</p>
            </td>
            <td>
                <p class="score__time">${elem.time}</p>
            </td>
        </tr>`;
    tableBody.insertAdjacentHTML('beforeend', tableItem);
};