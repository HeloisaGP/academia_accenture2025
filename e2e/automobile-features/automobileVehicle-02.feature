#utf-8
#language: pt

Funcionalidade: automobileVehicle-02 - Preenchimento dos dados do veículo
    Cenário: Validação falha ao preencher campo obrigatório com dado inválido
        Dado que acesso o portal Tricentis Vehicle Insurance
        E clico na aba Automobile
        E visualizo a seção Enter Vehicle Data
        Quando preencho campo obrigatório com dado de veículo inválido
        Então sistema exibe mensagem de erro

