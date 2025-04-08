#utf-8
#language: pt

Funcionalidade: truckVehicle-01 - Preenchimento dos dados do veículo
    Cenário: Validação bem-sucedida com campos obrigatórios preenchidos
        Dado que acesso o portal Tricentis Vehicle Insurance
        E clico na aba Truck
        E visualizo a seção Enter Vehicle Data
        Quando preencho campos obrigatórios com dados de caminhão válidos
        E clico no botão Next
        Então avanço para seção Enter Insurant Data