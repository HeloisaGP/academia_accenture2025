#utf-8
#language: pt

Funcionalidade: motorcycleVehicle-01 - Preenchimento dos dados do veículo
    Cenário: Validação bem-sucedida com campos obrigatórios preenchidos
        Dado que acesso o portal Tricentis Vehicle Insurance
        E clico na aba Motorcycle
        E visualizo a seção Enter Vehicle Data
        Quando preencho campos obrigatórios com dados de motocicleta corretos
        E clico no botão Next
        Então avanço para seção Enter Insurant Data