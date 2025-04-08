#utf-8
#language: pt

Funcionalidade: camperProduct-02 - Preenchimento dos dados do seguro
    Cenário: Validação falha ao preencher campo obrigatório com dado inválido
        Dado que acesso o portal Tricentis Vehicle Insurance
        E clico na aba Camper
        E acesso a seção Enter Product Data
        Quando preencho campo obrigatório com dado de seguro do trailer inválido
        Então sistema exibe mensagem de erro