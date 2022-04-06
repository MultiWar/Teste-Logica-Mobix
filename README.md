# Teste de Lógica da Mobix

Link do desafio: https://github.com/mobixsoftwarestudio/jobs/tree/master/first_challenge?b24form_user=2.1095-1650308186-071c080a5b1f2c349a72fa43645d92474335a2aae3da0fa74ba4b1cb346ea640

## Processo de resolução
- Fiz utilizando o Node pois me pareceu mais fácil interagir com o console e rodar a aplicação por ele. Então, primeiro, iniciei o Node na pasta do projeto
- Depois, procurei qual era o método utilizado pra pedir input do usuário através do console (gastei mais minutos do que gostaria nessa parte, pois tive um pouco de dificuldade com o método question, mas não tem problema, acontece)
- Decidi que começaria trabalhando com o input. Recebi e validei ele (precisa ser número e precisa ser >= 20), garantindo que não desse pro usuário quebrar o código inserindo inputs inválidos
- Comecei a brincar com inserir linhas no console. Nunca fiz desenhos no console, então não sei se essa é a maneira mais eficaz, mas me pareceu mais simples usar arrays e depois dar join, então foi o que fiz. Definitivamente gostei dessa escolha
- Percebi que a ampulheta era dividida em 2 partes. A metade superior possuía sua maior parte preenchida com '#' e só algumas posições com ' '. A inferior era o contrário. Então, iniciei 2 linhas base: uma pra superior, completamente preenchida com '#', e outra pra inferior, completamente preenchida com ' '.
- Após perceber isso, as coisas ficaram mais simples. Analisei as relações matemáticas entre as posições que estavam com ' ' nas linhas superiores, o número da própria linha e o número digitado pelo usuário. A mesma coisa com as inferiores, mas, como preciso preencher do meio pra fora, ao invés de preencher de fora pro meio, a conta ficou diferente (embora talvez desse pra aproveitar toda a lógica da metade superior, agora que paro pra pensar. Enfim, funciona)
- Tive alguns erros. O que se destaca aqui é que eu estava usando '' ao invés de ' ', o que não faz a menor diferença no Array mas faz muita diferença após o join
- A parte mais interessante foi a de analisar as relações matemáticas entre as partes envolvidas. Mas, claro, a que mais gostei foi ver funcionando
