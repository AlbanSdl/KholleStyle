const customColors = ["colorPrimary", "colorSecondary", "colorAccentOne", "colorAccentTwo", "colorAccentThree", "colorAccentFour"];
var colorObject = {
    colorPrimary: "#222222",
    colorSecondary: "#ffffff",
    colorAccentOne: "#cceaff",
    colorAccentTwo: "#A9B7C0",
    colorAccentThree: "#acddff",
    colorAccentFour: "#508ce2"
};
customColors.forEach((sColor) => {
    browser.storage.local.get(sColor).then((option) => {
        const isLastColor = sColor == customColors[customColors.length - 1];
        if (option[sColor] != undefined) {
            colorObject[sColor] = option[sColor];
            if (isLastColor) performTransformation();
        } else {
            browser.storage.sync.get(sColor).then((option) => {
                if (option[sColor] != undefined)
                    colorObject[sColor] = option[sColor];
                if (isLastColor) performTransformation();
            });
        }
    });
}).then();

function performTransformation() {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
    /* Removes shadows */
    .accueil a, .accueil li, #header, .accueil td, .accueil a:hover, #menu:hover, #menu a, .entete td, td.entete, .tableausimple th{
        text-shadow: none;
    }
    #header, .accueil a, .accueil li, .accueil td {
        text-shadow: none !important
    }


    /* Tweaks border-radius */
    #header, .accueil a, .accueil li, .accueil td, #menu a, .bouton a, div.colle, div#grise table.reservation {
        border-radius: 0
    }
    #menu a, .error {
        border-radius: 2px
    }

    /* Applies colors */
    /* Color Primary */
    html, td:hover div.popup, td.matiere:hover  li.niveau1, td.colloscope:hover, td.matiere ul ul ul ul, td.matiere ul ul a, div.colle {
        background: ${colorObject["colorPrimary"]}
    }
    #header, .accueil, .accueil a, .accueil a:hover, #menu a:hover, .bouton a {
        color: ${colorObject["colorPrimary"]}
    }
    div#grise table.reservation td,div#grise table.reservation th, div#grise table.reservation tr, div#grise table.reservation, .couleur ul li, .photo, td.matiere ul.niveau3 li {
        border: 1px solid ${colorObject["colorPrimary"]}
    }
    td.couleur {
        border:1px solid ${colorObject["colorPrimary"]} !important
    }
    .photo {
        box-shadow: 2px 2px 4px ${colorObject["colorPrimary"]}
    }

    /* Color Secondary */
    html, #menu a, .info, .entete td, td.entete, .tableausimple th, td:hover div.popup, td.matiere ul ul ul ul, td.matiere ul ul a, td.matiere ul ul ul ul a, div.colle, footer {
        color: ${colorObject["colorSecondary"]}
    }
    .error {
        background-color: ${colorObject["colorSecondary"]};
    }
    .tableausimple td, th, td.matiere ul ul li:hover, .couleur ul li:hover {
        border: 1px solid ${colorObject["colorSecondary"]}
    }
    div.colle, td:hover div.popup {
        border: 2px solid ${colorObject["colorSecondary"]}
    }

    /* Color Accent 1 */
    #header {
        background: ${colorObject["colorAccentOne"]}
    }

    /* Color Accent 2 */
    .accueil a, .bouton a, .bouton a:hover, .plusclair {
        background: ${colorObject["colorAccentTwo"]}
    }

    /* Color Accent 3 */
    .accueil li, .accueil td {
        background: ${colorObject["colorAccentThree"]}
    }
    .accueil a:hover, #menu a:hover {
        background: ${colorObject["colorAccentThree"]} !important
    }

    /* Color Accent 4 */
    #menu a, .entete td, td.entete, .tableausimple th, div#grise table.reservation {
        background: ${colorObject["colorAccentFour"]};
    }

    /* Tweaked font size */
    h1 {
        font-size: 45px
    }

    /* Removing widths */
    ul.accueil {
        width:auto !important
    }
    .accueil, .accueil li, .accueil ul, .cote, #header, #bloc_page, #bloc {
        min-width: unset;
        width: unset
    }

    /* Mobile fix (with flex) */
    #bloc {
        display: flex;
        flex-direction: row;
        align-items: unset;
        max-width: 100%;
        padding-top: 4px;
    }

    #bloc_page {
        flex: 4 0 content;
        order: unset
    }

    .cote {
        flex: 1 2 150px;
        margin: -1px 5px !important;
        order: unset
    }

    .accueil {
        margin: auto
    }

    #menu a {
        font-weight: 600
    }

    .tableausimple {
        border: none !important;
        background: transparent
    }

    form .tableausimple td,th {
        border: none !important
    }
    
    @media(max-width:780px) {
        #bloc{
            flex-direction:column;
            align-items: center;
            padding-top: 0
        }
        #header{
            order: 0
        }
        .cote{
            order: 1;
            min-width: 200px
        }
        h1{
            font-size: 35px
        }
    }`;
    document.body.appendChild(styleElement);

    setTimeout(() => {
        // Adds animations to all elements after (short) delay
        const styleAnim = document.createElement("style");
        styleAnim.innerHTML = `
        * {
            -webkit-transition:all .2s ease;
            -moz-transition:all .2s ease;
            -o-transition:all .2s ease;
            transition:all .2s ease
        }`;
        document.body.appendChild(styleAnim);
    }, 20);

    const meta = document.createElement('meta');
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0";
    document.head.appendChild(meta);
}