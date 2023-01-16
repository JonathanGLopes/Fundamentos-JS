function newButton(text, callback){
    const $div = document.querySelector(".callback");
    const $button = document.createElement("button");
    $button.textContent = text;

    callback($button);

    $div.insertAdjacentElement("beforeend", $button);

    return $button;
}

newButton("Login", (button) =>{
    button.style.cssText = `
      font-size: 20px;
      padding: 10px 20px;
      margin-right: 6px;
    `;
});


newButton("Inscreva-se", (button) => {
    button.style.cssText = `
      font-size: 20px;
      padding: 10px 20px;
      margin-left: 6px;
    `;
});