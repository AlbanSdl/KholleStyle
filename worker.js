browser.commands.onCommand.addListener((command) => {
    if (command === "open-e-colle") {
        browser.tabs.create({
            active: true,
            url: "https://e-colle.lycee-berthelot.fr/"
        });
    }
});