"use strict";
const dataModule = new DataModule();
const render = new Render();
$("#generator-btn").on("click", function () {
    console.log('in click new user ');
    dataModule.generateNewPage();
    render.renderPage(dataModule.getDataToRender());
});
//# sourceMappingURL=controller.js.map