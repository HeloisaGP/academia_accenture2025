#utf-8
#language: pt

Funcionalidade: truckInsurant-01 - Preenchimento dos dados do segurador
    Cenário: Validação bem-sucedida com campos obrigatórios preenchidos
        Dado que acesso o portal Tricentis Vehicle Insurance
        E clico na aba Truck
        E acesso a seção Enter Insurant Data
        Quando preencho campos obrigatórios com dados válidos
        E clico no botão Next da seção Enter Insurant Data
        Então visualizo a seção Enter Product Data