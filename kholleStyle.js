var colors = {
    colorPrimary: "#222222",
    colorSecondary: "#ffffff",
    colorAccentOne: "#cceaff",
    colorAccentTwo: "#A9B7C0",
    colorAccentThree: "#acddff",
    colorAccentFour: "#508ce2"
};
browser.storage.sync.get(Object.keys(colors)).then((option) => {
    Object.keys(colors).forEach(key => {
        if (option[key] != null) colors[key] = option[key];
        if (key === Object.keys(colors).slice(-1)[0]) performTransformation(); // if last item
    });
});

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
        background: ${colors.colorPrimary}
    }
    #header, .accueil, .accueil a, .accueil a:hover, #menu a:hover, .bouton a {
        color: ${colors.colorPrimary}
    }
    div#grise table.reservation td,div#grise table.reservation th, div#grise table.reservation tr, div#grise table.reservation, .couleur ul li, .photo, td.matiere ul.niveau3 li {
        border: 1px solid ${colors.colorPrimary}
    }
    td.couleur {
        border:1px solid ${colors.colorPrimary} !important
    }
    .photo {
        box-shadow: 2px 2px 4px ${colors.colorPrimary}
    }

    /* Color Secondary */
    html, #menu a, .info, .entete td, td.entete, .tableausimple th, td:hover div.popup, td.matiere ul ul ul ul, td.matiere ul ul a, td.matiere ul ul ul ul a, div.colle, footer {
        color: ${colors.colorSecondary}
    }
    .error {
        background-color: ${colors.colorSecondary};
    }
    .tableausimple td, th, td.matiere ul ul li:hover, .couleur ul li:hover {
        border: 1px solid ${colors.colorSecondary}
    }
    div.colle, td:hover div.popup {
        border: 2px solid ${colors.colorSecondary}
    }

    /* Color Accent 1 */
    #header {
        background: ${colors.colorAccentOne}
    }

    /* Color Accent 2 */
    .accueil a, .bouton a, .bouton a:hover, .plusclair {
        background: ${colors.colorAccentTwo}
    }

    /* Color Accent 3 */
    .accueil li, .accueil td {
        background: ${colors.colorAccentThree}
    }
    .accueil a:hover, #menu a:hover {
        background: ${colors.colorAccentThree} !important
    }

    /* Color Accent 4 */
    #menu a, .entete td, td.entete, .tableausimple th, div#grise table.reservation {
        background: ${colors.colorAccentFour};
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