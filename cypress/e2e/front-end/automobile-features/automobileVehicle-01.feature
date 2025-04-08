#utf-8
#language: pt

Funcionalidade: automobileVehicle-01 - Preenchimento dos dados do veículo
    Cenário: Validação bem-sucedida com campos obrigatórios preenchidos
        Dado que acesso o portal Tricentis Vehicle Insurance
        E clico na aba Automobile
        E visualizo a seção Enter Vehicle Data
        Quando preencho campos obrigatórios com dados de veículo válidos
        E clico no botão Next
        Então avanço para seção Enter Insurant Data
    