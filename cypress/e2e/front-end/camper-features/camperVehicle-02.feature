#utf-8
#language: pt

Funcionalidade: camperVehicle-02 - Preenchimento dos dados do veículo
    Cenário: Validação falha ao preencher campo obrigatório com dado inválido
        Dado que acesso o portal Tricentis Vehicle Insurance
        E clico na aba Camper
        E visualizo a seção Enter Vehicle Data
        Quando preencho campo obrigatório com dado de trailer inválido
        Então sistema exibe mensagem de erro