# Docker

O Docker é uma programa escrito em Go que tem como função principal o "virtualização a nível de sistema operacional"
 ou "conteinerizão", recomendo pesquisar melhor sobre isso, mas explicando bem vagamente ele permite a você subir "mini sistemas operacionais" dentro do seu sistema operacional, compartilhando o mesmo Kernel, geralmente o Kernel Linux.

Dessa forma você consegue criar imagens com um sistema operacional que utiliza o seu Kernel e instalar aplicações no mesmo de forma muito fácil, tudo sem "sujar" o seu espaço em disco, pois o Docker salva o mesmo em um lugar específico do seu sistema operacional que basta apenas um comando para desinstalar.

Existem várias linguagens com imagens do Docker oficiais de linguagens de programação, como [Node.js](https://hub.docker.com/_/node), [PHP](https://hub.docker.com/_/php), [Python](https://hub.docker.com/_/python) e [Go](https://hub.docker.com/_/golang), que bastam apenas você executar dois comandos (`docker pull imagem:versao` e `docker run image:versao`) para sair programando e executando a linguagem específica.

O mais legal de desenvolver no Docker é que como você vai estar desenvolvendo em um sistema operacional conteinerizado, dessa forma você pode compartilhar exatamente o mesmo ambiente de desenvolvimento e produção com outras pessoas, assim você perde menos tempo procurando as dependências corretas do seu projeto e acaba com o problema do "na minha máquina funciona".

Como eu disse, o Docker é bem mais complexo que isso e essa é apenas a minha explicação de forma rápida, portanto sugiro você pesquisar mais sobre Docker caso tenha tido interesse.

Há também [essa palestra minha na Campus Party Bahia 3 em 2018](https://www.youtube.com/watch?v=hj038eSYs5A) que eu falei um pouco sobre Docker e Docker Compose com PHP.
