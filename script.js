function CreateCard(ULR1, title, title2, ULR2) {
    let html = `
        <div class="container">
            <div class="image">
                <img src="${ULR1}" alt="photo">
            </div>
            <div class="tag-name">
                <span>Read Later</span>
                <span>Share</span>
            </div>
            <div class="containr-header">
                <h3>${title}</h3>
            </div>
            <div class="text-container">
                ${title2}
            </div>
            <div class="btn">
                <a href="${ULR2}">
                    <button>
                        Read More
                    </button>
                </a>
            </div>
        </div>
    `;

    document.querySelector("#content-container").innerHTML += html;
}

CreateCard("./images/html-text-file-images/morzila_1.png", "Firefox launches Developer Edition Browser for Web Developers",
    "Mozilla Introduces the First Browser Built For Developers: Firefox Developer Edition", "https://superdevresources.com/firefox-developer-edition-browser-web-developers/");

CreateCard("./images/html-text-file-images/morzila_1.png", "Firefox launches Developer Edition Browser for Web Developers",
    "Mozilla Introduces the First Browser Built For Developers: Firefox Developer Edition", "https://superdevresources.com/firefox-developer-edition-browser-web-developers/");
    CreateCard("./images/html-text-file-images/morzila_1.png", "Firefox launches Developer Edition Browser for Web Developers",
    "Mozilla Introduces the First Browser Built For Developers: Firefox Developer Edition", "https://superdevresources.com/firefox-developer-edition-browser-web-developers/");

CreateCard("./images/html-text-file-images/morzila_1.png", "Firefox launches Developer Edition Browser for Web Developers",
    "Mozilla Introduces the First Browser Built For Developers: Firefox Developer Edition", "https://superdevresources.com/firefox-developer-edition-browser-web-developers/");
    CreateCard("./images/html-text-file-images/morzila_1.png", "Firefox launches Developer Edition Browser for Web Developers",
    "Mozilla Introduces the First Browser Built For Developers: Firefox Developer Edition", "https://superdevresources.com/firefox-developer-edition-browser-web-developers/");
