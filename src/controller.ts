const dataModule= new DataModule();
const render= new Render();


$("#generator-btn").on("click",async function (){
    // console.log('in click new user ');
    await dataModule.generateNewPage();
    // console.log(dataModule.getDataToRender());
    render.renderPage(dataModule.getDataToRender());
})