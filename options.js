function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
        colorPrimary: document.querySelector("#backgroundColor").value,
        colorSecondary: document.querySelector("#textColor").value,
        colorAccentOne: document.querySelector("#accent1Color").value,
        colorAccentTwo: document.querySelector("#accent2Color").value,
        colorAccentThree: document.querySelector("#accent3Color").value,
        colorAccentFour: document.querySelector("#accent4Color").value
    });
    browser.storage.sync.set({
        colorPrimary: document.querySelector("#backgroundColor").value,
        colorSecondary: document.querySelector("#textColor").value,
        colorAccentOne: document.querySelector("#accent1Color").value,
        colorAccentTwo: document.querySelector("#accent2Color").value,
        colorAccentThree: document.querySelector("#accent3Color").value,
        colorAccentFour: document.querySelector("#accent4Color").value
    });
};

function getPreference(preferenceName, callbackFunction) {
    browser.storage.sync.get(preferenceName).then((option) =>{callbackFunction(option[preferenceName])});
};

document.addEventListener("DOMContentLoaded", () => {
    getPreference("colorPrimary", (color) => {
        if (color !== null)
            document.getElementById("backgroundColor").value = color || "#222222";
    });
    getPreference("colorSecondary", (color) => {
        if (color !== null)
            document.getElementById("textColor").value = color || "#ffffff";
    });
    getPreference("colorAccentOne", (color) => {
        if (color !== null)
            document.getElementById("accent1Color").value = color || "#cceaff";
    });
    getPreference("colorAccentTwo", (color) => {
        if (color !== null)
            document.getElementById("accent2Color").value = color || "#A9B7C0";
    });
    getPreference("colorAccentThree", (color) => {
        if (color !== null)
            document.getElementById("accent3Color").value = color || "#acddff";
    });
    getPreference("colorAccentFour", (color) => {
        if (color !== null)
            document.getElementById("accent4Color").value = color || "#508ce2";
    });
});

// Actions for save
document.querySelector("form").addEventListener("submit", saveOptions);

// Actions for reset
document.querySelector("#reset").addEventListener("click", (event) => {
    document.getElementById("backgroundColor").value = "#222222";
    document.getElementById("textColor").value = "#ffffff";
    document.getElementById("accent1Color").value = "#cceaff";
    document.getElementById("accent2Color").value = "#A9B7C0";
    document.getElementById("accent3Color").value = "#acddff";
    document.getElementById("accent4Color").value = "#508ce2";
    saveOptions(event);
});