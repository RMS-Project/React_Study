# Estudo de React

<h3>Instalação do React</h3>

<p><b>npx create-react-app my-app</b></p>

<p>ou</p>

<p><b>npm init react-app my-app</b></p>

<p>ou</p>

<p><b>yarn create react-app my-app</b></p>

<h3>Iniciar o projeto</h3>

<p>Dentro desse diretório, você pode executar vários comandos:</p>

<b>yarn start</b> - Inicia o servidor de desenvolvimento.</p>

<b>yarn build</b> - Agrupa o aplicativo em arquivos estáticos para produção.</p>

<b>yarn test</b> - Inicia o executor de teste.</p>

<b>yarn eject</b> - Remove esta ferramenta e copia dependências de compilação, arquivos de configuração e scripts no diretório do aplicativo. Se você fizer isso, você não pode voltar!</p>

<p>Dica: Instalar variável de ambiente do VS Code para abri-lo via terminal:</p>
<p>Tecle ‘F1’ e digite code – Click sobre “Shell Command: Install ‘code’ command in PATH”.</p>

<p>Na pasta public temos os arquivos públicos, um deles é o index.html que apresenta a estrutura básica do HTML coma div app que renderiza o conteúdo enviado pelo script localizado em src/index.js. Este processo se chama componentização.</p>

<p>Neste arquivo temos a importação de React e ReactDOM que é o responsável por enviar o elemento para renderizar na div app. O conteúdo de app está dentro de src/App.js.</p>

<p>JSX – HTML que se encontra dentro do JavaScript. A diferença do HTML convencional, é que podemos inserir javascript e componentes nele de uma forma mais facilmente.</p>

<p>Ao inserir um elemento a qual receberá formatação CSS por classe, devemos alterar class para className, pois dentro do react class é uma palavra reservada.</p>

<p>Todos os elementos do react são componentes inclusive o App.js. Todo componente tem um estado interno que vai definir os estados e as vaiáveis e vai receber propriedades.</p>

<p>Os atributos das tags HTML dentro do react passam a ser propriedades.</p>

<p>Todo componente React (função) tem por padrão o parâmetro props, que pode-se passar propriedades de um componente para outro. Quando vamos inserir esta propriedade dentro do JSX devemos coloca-lo entre colchetes “{}”.</p>

<p>Fragment – Como o JSX não pode ser passado com vários elementos costuma-se colocar o conteúdo em uma ``` <div></div> ``` porém e pode em alguns cados quebras a estilização então utiliza-se fragment ``` <> </> ```. Assim o elemento container não é renderizado. Ficando apenas o conteúdo que ele possui.</p>

<p>UserState – Implementa rookies para citar estados e modificar estados dos componentes.</p>
<p>Ele retorna um array com duas posições, vai retornar um elemento e uma função ex: [usuario, setUsuario].</p>
<p>Podendo utilizar neste caso a desestruturação.</p>


<p style="color: red;">Pesquisar por ``` <React.StrictMode> ```</p>