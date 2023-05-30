# _Documentação da API_

## **Sistema de Autenticação**

### LOGIN

> - route => "/api/admin/auth/login"
> - method => "POST"
> - param => {login, senha}
> - response (HTTP200) => {data, "Usuário Autenticado!"}
> - response (HTTP401) => {data, "Usuário e/ou senha incorreto(s)"}

    obs: login pode ser email ou usuário (mas o parâmetro para os dois é "login")

### LOGOUT

> - route => "/api/admin/auth/logout"
> - method => "GET"

### Retorno quando não Autenticado (LOGADO)
		
> - response => {data : 'Não Autenticado'}

    obs: Essa response será o retorno de qualquer tentativa de requisição no admin, quando usuario não estiver logado.

## **Categorias**

### CREATE

> - route => "/api/admin/categorias/create"
> - method => "POST"
> - param => {descricao}
> - response => {data: "Categoria cadastrada com sucesso!"} ou {data: "Categoria já existe na base de dados!"}

### LISTA

> - route => "/api/admin/categorias"
> - method => "GET"
> - response => {data: [{id, descricao},{id, descricao},{id, descricao}...]}