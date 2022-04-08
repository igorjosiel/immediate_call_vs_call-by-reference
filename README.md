Entendendo melhor as diferenças entre chamadas de funções imediatas {renderTextImmediately()} e chamadas por referência {functionByReference} no React.

Funções imediatas servem para renderizar algum trecho de elementos, assim que a página carregar. Será executado tudo de maneira imediata.
Observação: Evitar ao máximo ustilizar estado ou alteração de estado dentro de uma função desse tipo, pois essa ação resultará em um loop infinito, 
já que ao renderizar a página a função é chamada, atualizando o estado, que causa uma nova renderização na tela, e aí você já sabe o resto haha.

Funções por referência são funções que existem, estão armazenadas na memória, porém ainda não foram acionadas, e só serão chamadas a partir de algum evento, 
ação do usuário ou do sistema em si, podendo ser passada de componente pai para um filho, para ser chamada lá, que executará a referência da função.
