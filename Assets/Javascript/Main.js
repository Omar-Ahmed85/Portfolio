export function openMenu(event) {
    const isDropDownButton = event.target.matches('[data-dropdown-button]');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownButton = document.querySelector('[data-dropdown-button]');

    if (isDropDownButton) {
        dropdownMenu.classList.toggle('visible');
        if (dropdownButton.getAttribute('name') === 'menu-outline') {
            dropdownButton.setAttribute('name', 'close-outline');
        } else {
            dropdownButton.setAttribute('name', 'menu-outline');
        }
    }
}

export const sideBar = document.querySelector('.side-bar');
export const sections = document.querySelector('.sections');
export const header = document.querySelector('header');