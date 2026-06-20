const settingsBtn =
            document.getElementById("settingsBtn");

        const settingsPanel =
            document.getElementById("settingsPanel");

        const closePanel =
            document.getElementById("closePanel");

        settingsBtn.onclick = () => {
            settingsPanel.classList.add("active");
        }

        closePanel.onclick = () => {
            settingsPanel.classList.remove("active");
        }

        /* FONT CHANGER */

        const fontSelector =
            document.getElementById("fontSelector");

        fontSelector.addEventListener("change", function () {

            document.body.style.fontFamily =
                this.value;

            localStorage.setItem(
                "royald_font",
                this.value
            );
        });

        /* LOAD FONT */

        const savedFont =
            localStorage.getItem("royald_font");

        if (savedFont) {

            document.body.style.fontFamily =
                savedFont;

            fontSelector.value =
                savedFont;
        }

        /* THEMES */

        document.querySelector(".gold-theme")
            .onclick = () => {

                document.body.style.background =
                    "#000";

                document.body.style.color =
                    "gold";

                localStorage.setItem(
                    "royald_theme",
                    "gold");
            };

        document.querySelector(".blue-theme")
            .onclick = () => {

                document.body.style.background =
                    "#001d3d";

                document.body.style.color =
                    "white";

                localStorage.setItem(
                    "royald_theme",
                    "blue");
            };

        document.querySelector(".green-theme")
            .onclick = () => {

                document.body.style.background =
                    "#002b15";

                document.body.style.color =
                    "white";

                localStorage.setItem(
                    "royald_theme",
                    "green");
            };

        document.querySelector(".red-theme")
            .onclick = () => {

                document.body.style.background =
                    "#3b0000";

                document.body.style.color =
                    "white";

                localStorage.setItem(
                    "royald_theme",
                    "red");
            };

        /* LOAD THEME */

        const savedTheme =
            localStorage.getItem("royald_theme");

        if (savedTheme === "blue") {
            document.body.style.background = "#001d3d";
        }

        if (savedTheme === "green") {
            document.body.style.background = "#002b15";
        }

        if (savedTheme === "red") {
            document.body.style.background = "#3b0000";
        }

        /* WALLPAPER UPLOAD */

        document.getElementById("wallpaperUpload")
            .addEventListener("change", function (e) {

                const file =
                    e.target.files[0];

                if (!file) return;

                const reader =
                    new FileReader();

                reader.onload = function (event) {

                    document.body.style.backgroundImage =
                        `url(${event.target.result})`;

                    localStorage.setItem(
                        "royald_wallpaper",
                        event.target.result
                    );

                }

                reader.readAsDataURL(file);

            });

        /* LOAD WALLPAPER */

        const wallpaper =
            localStorage.getItem(
                "royald_wallpaper"
            );

        if (wallpaper) {

            document.body.style.backgroundImage =
                `url(${wallpaper})`;

        }

        /* RESET */

        document.getElementById("resetSettings")
            .onclick = () => {

                localStorage.clear();

                location.reload();

            };
