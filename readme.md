Para rodar o projeto:


1- Instale o Node.js na máquina - http://www.nodejs.org/

2 - Abra o terminal, navegue até a pasta do projeto e digite: npm install

* Isso já deve instalar todas as dependências do projeto sem problemas, mas caso de algum erro que não seja permissão, por favor rode:

	npm install express gulp gulp-csso gulp-sass gulp-clean-css —save-dev

3 - Rode o comando: node server.js

4 - Acesse http://localhost:3000/


.......... Aplicação rodando :)



Para editar o projeto:


- instalar o gulp globalmente na máquina caso não tenha: sudo npm install -g gulp 

- A pasta public contém todos os scss, html e js. 

- Esse projeto foi desenvolvido em sass, os scss se encontram na pasta css/sass divididos pelas suas respectivas categorias.

- Após fazer as alterações rode o comando: gulp  na raiz do projeto para compilar e mimificar o css.


*** Atenção: Esse projeto é responsivo ao alterar o layout não se esqueça de testar em mobile e tablet. ***


URL para rodar os testes: http://localhost:3000/jasmine/teste.html

	Path: public/jasmine/