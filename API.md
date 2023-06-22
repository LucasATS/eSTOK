# _Documentação da API_

## **Sistema de Autenticação**

### LOGIN

> - route => "/api/admin/auth/login"
> - method => "POST"
> - param => {login: String, senha: String}
> - response (HTTP200) => { data: { status: 'ok', message: "Usuário Autenticado!" } }
> - response (HTTP401) => { data: { status: 'erro', message: "Usuário e/ou senha incorreto(s)" } }

    obs: login pode ser email ou usuário (mas o parâmetro para os dois é "login")

    Instrução Completa: submit({'login': 'Admin', 'senha': '1'},'POST', 'api/admin/auth/login').then(data => data.json()).then(resp => console.log(resp))

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
> - param => {descricao: String}
> - response => { data: { status: 'ok', message: "Categoria cadastrada com sucesso!" / "Categoria já existe na base de dados!" } }

    Intrução Completa: submit({'descricao': 'Diversos'},'POST', '/api/admin/categorias/create').then(data => data.json()).then(resp => console.log(resp))
                       submit({'descricao': 'Diversos 2'},'POST', '/api/admin/categorias/create').then(data => data.json()).then(resp => console.log(resp))

### LISTA

> - route => "/api/admin/categorias"
> - method => "GET"
> - response => {data: [{ID, Descrição, Status},{ID, Descrição, Status},{ID, Descrição, Status}...]}

    Instrução Completa: submit({},'GET', '/api/admin/categorias').then(data => data.json()).then(resp => console.log(resp))

## **Unidade de Medidas**

### CREATE

> - route => "/api/admin/tipos-de-medidas/create"
> - method => "POST"
> - param => {abreviacao: String, descricao: String}
> - response => { data: { status: 'ok', message: "Unidade cadastrada com Sucesso!" / "Unidade ja existe na base de dados!" } }

    Instrução Completa: submit({'abreviacao': 'CX25', 'descricao': 'Caixa com 25'},'POST', '/api/admin/tipos-de-medidas/create').then(data => data.json()).then(resp => console.log(resp))

### LISTA

> - route => "/api/admin/tipos-de-medidas"
> - method => "GET"
> - response => {data: [{Abreviação, Descrição, Status},{Abreviação, Descrição, Status},{Abreviação, Descrição, Status}...]}

    Instrução Completa: submit({},'GET', '/api/admin/tipos-de-medidas').then(data => data.json()).then(resp => console.log(resp))

## **Tipos de Produto**

### CREATE

> - route => "/api/admin/tipos-de-produto/create"
> - method => "POST"
> - param => {descricao: String}
> - response => { data: { status: 'ok', message: "Tipo de Produto cadastrado com sucesso!" / "Tipo de Produto ja existe na base de dados!" } }

    Instrução Completa: submit({'descricao': 'Teste 1'},'POST', '/api/admin/tipos-de-produto/create').then(data => data.json()).then(resp => console.log(resp))

### LISTA

> - route => "/api/admin/tipos-de-produto"
> - method => "GET"
> - response => {data: [{ID, Descrição, Status},{ID, Descrição, Status},{ID, Descrição, Status}...]}

    Instrução Completa: submit({},'GET', '/api/admin/tipos-de-produto').then(data => data.json()).then(resp => console.log(resp))

## **Produtos**

### CREATE

> - route => "/api/admin/produtos/create"
> - method => "POST"
> - param => {nome: String, descricao: String, id_categoria: int, id_tp_produto: int, id_unidade: String, foto: Blob/buffer, fungibilidade: Boolean, estocavel: Boolean}
> - response => { data: { status: 'ok', message: "Produto Cadastrado com Sucesso!" / "Produto já existe na base de dados!" } }

### LISTA

> - route => "/api/admin/produtos"
> - method => "GET"
> - param => {Inicial : INT, Quantidade: INT}
> - response => {total: INT, data: [{ID, Produto, Categoria, Tipo do Produto, Unidade, Status},{ID, Produto, Categoria, Tipo do Produto, Unidade, Status},{ID, Produto, Categoria, Tipo do Produto, Unidade, Status}...]}
    Instrução Completa: submit({}, "GET", "/api/admin/produtos").then(data => data.json()).then(resp => console.log(resp))

### ATIVAR/INATIVAR STATUS

> - route => "/api/admin/produtos/altera-status"
> - method => "POST"
> - param => {}
> - response => { data: { status: 'ok', message: "Produto Ativado com sucesso!" / "Produto Inativado com sucesso!" } }

## **Estoque**

### Produto ao estoque

> - route => "/api/admin/estoque/movimentacao-entrada"
> - method => "POST"
> - param => {id_produto: int, quantidade: Double, unitario: Double, total: Double, validade: Date, lote: String, data_compra: Date}
> - response => { data: { status: 'ok', message: "Produtos Foram Adicionadas com Sucesso!" } }

    Instrução Completa: submit({id_produto: 1, quantidade: 1, unitario: 15.00, total: 15.00, validade: '2023-12-31', lote: 'LOTE', data_compra: '2023-12-06'},'POST', '/api/admin/estoque/movimentacao-entrada').then(data => data.json()).then(resp => console.log(resp))

    submit({id_produto: 1, quantidade: 1, unitario: 15.00, total: 15.00, validade: '2023-12-31', lote: 'LOTE1', data_compra: '2023-12-06'},'POST', '/api/admin/estoque/movimentacao-entrada').then(data => data.json()).then(resp => console.log(resp))

### LISTA

> - route => "/api/admin/estoque"
> - method => "GET"
> - param => {Inicial : INT, Quantidade: INT}
> - response => {total: INT, data: [{ID, Produto, Categoria, Quantidade, Preço, Data Compra, Vencimento, Lotes},{ID, Produto, Categoria, Quantidade, Preço, Data Compra, Vencimento, Lotes},{ID, Produto, Categoria, Quantidade, Preço, Data Compra, Vencimento, Lotes}...]}

    Instrução Completa: submit({}, "GET", "/api/admin/estoque").then(data => data.json()).then(resp => console.log(resp))

## **Venda**

### Venda por Administrador

> - route => "/api/admin/venda"
> - method => "POST"
> - param => {

        produtos: [
            {id: INT, quantidade: INT, preco: Double, total: Double},
            {id: INT, quantidade: INT, preco: Double, total: Double},
            ...
        ],
        comprador: {
            nome: String, email: String ,telefone: String ,endereco: String ,bairro: String,
            uf: String(2), cidade: String ,nome_cartao: String, numero_cartao: Number ,
            dt_vencimento: DATE, cvv_e: INT
        },
        total: Double
    }

> - response => { data: { status: 'ok', message: "Venda realizada com sucesso!" } }

    Instrução Completa: submit(
    {
        'produtos': [
            {id: 7, quantidade: 1, preco: 5.25, total: 5.25}
        ],
        'comprador': {
            nome: 'Oliver Queen', email: 'oliver_queen@gmail.com' ,telefone: '67999999999' ,endereco:'rua metropolitana, 35' ,bairro: 'Hades',
            uf: 'US', cidade: 'Starling City' ,nome_cartao: 'Industrias Queen', numero_cartao: '6458213548153458' ,
            dt_vencimento: '2024-04-01', cvv_e: '337'
        },
        'total':5.25

    },'POST', '/api/admin/venda').then(data => data.json()).then(resp => console.log(resp));

### Venda Site Cliente

> - route => "/api/venda"
> - method => "POST"
> - param => {

        produtos: [
            {id: INT, quantidade: INT, preco: Double, total: Double},
            {id: INT, quantidade: INT, preco: Double, total: Double},
            ...
        ],
        comprador: {
            nome: String, email: String ,telefone: String ,endereco: String ,bairro: String,
            uf: String(2), cidade: String ,nome_cartao: String, numero_cartao: Number ,
            dt_vencimento: DATE, cvv_e: INT
        },
        total: Double
    }

> - response => { data: { status: 'ok', message: "Venda realizada com sucesso!" } }

    Instrução Completa: submit(
    {
        'produtos': [
            {id: 7, quantidade: 1, preco: 5.25, total: 5.25}
        ],
        'comprador': {
            nome: 'Oliver Queen', email: 'oliver_queen@gmail.com' ,telefone: '67999999999' ,endereco:'rua metropolitana, 35' ,bairro: 'Hades',
            uf: 'US', cidade: 'Starling City' ,nome_cartao: 'Industrias Queen', numero_cartao: '6458213548153458' ,
            dt_vencimento: '2024-04-01', cvv_e: '337'
        },
        'total':5.25

    },'POST', '/api/admin/venda').then(data => data.json()).then(resp => console.log(resp));
