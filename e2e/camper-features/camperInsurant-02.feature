#utf-8
#language: pt

Funcionalidade: camperInsurant-02 - Preenchimento dos dados do segurador
    Cenário: Validação falha ao preencher campo obrigatório com dado inválido
        Dado que acesso o portal Tricentis Vehicle Insurance
        E clico na aba Camper
        E acesso a seção Enter Insurant Data
        Quando preencho campo obrigatório com dado inválido 
        Então sistema exibe mensagem de erro