#utf-8
#language: pt

Funcionalidade: truckPrice-02 - Seleção do plano de seguro
    Cenário: Tentativa falha de seleção de opção de plano desejada
        Dado que acesso o portal Tricentis Vehicle Insurance
        E clico na aba Truck
        E preencho com dados do caminhão válidos a Enter Vehicle Data
        E clico no botão next da Enter Vehicle Data
        E preencho com dados do caminhão válidos a Enter Insurant Data
        E clico no botão next da Enter Insurant Data
        E preencho com dado do caminhão inválido a Enter Product Data
        Quando clico no botão next da Enter Product Data
        E acesso a seção Select Price Option
        Então visualizo uma mensagem de alerta