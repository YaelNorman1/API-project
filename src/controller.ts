const dataModule= new DataModule();
const render= new Render();


$("#generator-btn").on("click",async function (){
    await dataModule.generateNewPage();
    render.renderPage(dataModule.getDataToRender());
})