#utf-8
#language: pt

Funcionalidade: motorcycleProduct-02 - Preenchimento dos dados do seguro
    Cenário: Validação falha ao preencher campo obrigatório com dado inválido
        Dado que acesso o portal Tricentis Vehicle Insurance
        E clico na aba Motorcycle
        E acesso a seção Enter Product Data
        Quando preencho campo obrigatório com dado de seguro da motocicleta inválido
        Então sistema exibe mensagem de erro