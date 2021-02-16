import 'mmenu-light/dist/mmenu-light';
import 'mmenu-light/dist/mmenu-light.css';


const menu = new MmenuLight(
    document.querySelector("#main-menu"),
);

const navigator = menu.navigation({
    title: 'Пансионат «Марсово поле»'
});

const drawer = menu.offcanvas({
    // options
});

document.addEventListener(
    "DOMContentLoaded", () => {
    document.querySelector("a[href='#main-menu']")
        .addEventListener("click", (event) => {
            event.preventDefault();
            drawer.open();
        });
    }
);