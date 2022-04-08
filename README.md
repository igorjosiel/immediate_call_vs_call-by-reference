Português

Entendendo melhor as diferenças entre chamadas de funções imediatas {renderTextImmediately()} e chamadas por referência {functionByReference} no React.

Funções imediatas servem para renderizar algum trecho de elementos, assim que a página carregar. Será executado tudo de maneira imediata.
Observação: Evitar ao máximo alterar algum estado dentro de uma função desse tipo, pois essa ação resultará em um loop infinito, 
já que ao renderizar a página a função é chamada, atualizando o estado, que causa uma nova renderização na tela, e aí você já sabe o resto haha.

Funções por referência são funções que existem, estão armazenadas na memória, porém ainda não foram acionadas, e só serão chamadas a partir de algum evento, 
ação do usuário ou do sistema em si, podendo ser passada de componente pai para um filho, para ser chamada lá, que executará a referência da função.

English

Better understanding the differences between immediate function calls {renderTextImmediate()} and reference calls {functionByReference} in React.

Immediate functions serve to render some piece of elements as soon as the page loads. Everything will be executed immediately
Note: Avoid to maximum ustilize state or state change within such a function, because this action will result in an infinite loop, since when rendering the page the function is called, updating the state, which causes a new rendering on the screen, and then you already know the rest haha.
Functions by reference are functions that exist, are stored in memory, yet have not been triggered, and will only be called from some event, user action or system itself, and can be passed from parent component to a child, to be called there, which will perform the reference of the function.
