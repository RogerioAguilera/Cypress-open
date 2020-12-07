// global Given, Then, When 

import IndexPage from '../pageobjects/IndexPage'
const indexPage = new IndexPage


Given("que acesse o site da loja", ()=> {
    indexPage.acessarSite();

})

    
When("desejo realizar a busca pelo produto Faded Short Sleeve", () => {
    indexPage.buscarProduto();

})


And("deve adicionar ao carrinho o primeiro produto de acordo com o resultado",()=>{
    indexPage.adicionarProduto();

})


Then ("validar se a quantidade inserida vai replicada no sumario do produto", () =>{
    indexPage.validarProduto();

})