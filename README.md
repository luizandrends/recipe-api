# Listagem de receitas
<p>Api de de backend desenvolvida com <strong>NodeJS</strong>, <strong>Express</strong> e <strong>Typescript</strong>. Esta aplicação consiste em uma listagem de receitas.</p>


## Configuração de ambiente

<p>Para configurar o ambiente ideal em sua maquina, por favor siga os passos abaixo: </p>

<div>
<h2> Variáveis ambiente </h2>
<ol>
  <li>Disponibilizei um arquivo <strong>env.example</strong> para as variáveis ambiente.</li>
<ol>
</div>

<div>
<h2> Testes </h2>
<ol>
  <li>Para garantir a integridade de código e escalabilidade foram utilizados testes de integração com a framework de testes JEST.</li>
  <li>Você pode utilizar o script <strong>yarn test</strong> em seu terminal para rodar todas as suits de testes.</li>
<ol>
</div>

<div>
<h2> Docker </h2>
<ol>
  <li>Como estou usando o docker compose, basta somente rodar o comando <strong>docker-compose up</strong> em seu terminal</li>
<ol>
</div>


<div>
<h2> Patterns, Principios e Metodologias </h2>
<ol>
  <li>Para garantir a integridade do codigo e escalabilidade foi utilizado o DDD (Domain Driven Design) como metodologia de desenvolvimento e o SOLID como o principio de programação.</li>
  <li>Neste repositório esta sendo utilizado o Repository Pattern.  Controller (recebe a request) -> Services (regras de negócio e percistencia de dados) -> Repositories (Persiste o objeto em si).</li>
<ol>
</div>

<div>
<h2> Documentação de rotas </h2>
<div>
  <h3>Receitas</h3>
  <li><strong>/recipes/find?ingredient_1=onions&ingredient_2=beet&ingredient_3=garlic:</strong>Esta rota consiste na listagem de receitas (Recebe no máximo 3 <strong>QUERY PARAMS</strong>).</li>
  <small>O recipe puppy esta com um problema com os seguintes ingredientes: ingredient_1:onions, ingredient_2:tomato</small>
</div>
</div>
