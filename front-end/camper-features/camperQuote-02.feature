#utf-8
#language: pt

Funcionalidade: camperQuote-01 - Envio da Cotação
    Cenário: Envio da cotação com sucesso
        Dado que acesso o portal Tricentis Vehicle Insurance
        E clico na aba Camper
        E preencho com dados válidos a Enter Vehicle Data
        E clico no botão next da Enter Vehicle Data
        E preencho com dados válidos a Enter Insurant Data
        E clico no botão next da Enter Insurant Data
        E preencho com dados válidos a Enter Product Data
        E clico no botão next da Enter Product Data
        E acesso a seção Select Price Option 
        E clico na opção de plano desejada
        E clico no botão next da Select Price Option
        Quando preencho campos obrigatórios com dado de login inválido
        E clico no botão send
        Então é exibida mensagem de erro
