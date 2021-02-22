if(document.readyState !== 'loading') {
    myInitCode();
} else {
    document.addEventListener("DOMContentLoaded", () => {
        myInitCode();
    });
}

function myInitCode() {
    let header = document.querySelector("header");
    let navigation = document.querySelector("nav");
    let mainContainer = document.querySelector("main .container");
    let bgHeader = document.querySelector('.js-remove-text');
    let bpStandard = "85.375em";

    const mqStandard = window.matchMedia(`(min-width: ${bpStandard})`);

    if(mqStandard.matches) {
        mainContainer.insertBefore(navigation, mainContainer.childNodes[0]);
        bgHeader.textContent = "";
    }

    mqStandard.addEventListener('change', e => {
        if(e.matches) {
            mainContainer.insertBefore(navigation, mainContainer.childNodes[0]);
            bgHeader.textContent = "";
        } else {
            header.appendChild(navigation);
            bgHeader.textContent = "Monde Bebe";
        }
    });
}

