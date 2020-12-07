
Feature: Ecommerce

    Como usuário, desejo acessar o site da loja
    Para que possa adicionar produtos ao carrinho através da busca
    Quero validar se os produtos vão ser adicionados corretamente


Scenario: Adicionar produto ao carrinho
    Given que acesse o site da loja
    When desejo realizar a busca pelo produto Faded Short Sleeve
    And deve adicionar ao carrinho o primeiro produto de acordo com o resultado
    Then validar se a quantidade inserida vai replicada no sumario do produto