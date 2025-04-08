#utf-8
#language: pt

Funcionalidade: truckProduct-01 - Preenchimento dos dados do seguro
    Cenário: Validação bem-sucedida com campos obrigatórios preenchidos
        Dado que acesso o portal Tricentis Vehicle Insurance
        E clico na aba Truck
        E acesso a seção Enter Product Data
        Quando preencho campos obrigatórios com dados de seguro do caminhão válidos
        E clico no botão Next da seção Enter Product Data
        Então acesso a seção Select Price Option