#utf-8
#language: pt

Funcionalidade: truckPrice-01 - Seleção do plano de seguro
    Cenário: Seleção da opção de plano desejada com sucesso
        Dado que acesso o portal Tricentis Vehicle Insurance
        E clico na aba Truck
        E preencho com dados do caminhão válidos a Enter Vehicle Data
        E clico no botão next da Enter Vehicle Data
        E preencho com dados do caminhão válidos a Enter Insurant Data
        E clico no botão next da Enter Insurant Data
        E preencho com dados do caminhão válidos a Enter Product Data
        E clico no botão next da Enter Product Data
        E acesso a seção Select Price Option 
        Quando clico na opção de plano desejada
        E clico no botão next da Select Price Option
        Então visualizo a seção Send Quote