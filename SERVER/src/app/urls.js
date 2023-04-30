class urls {
    constructor(server, views) {
        this.server = server;
        this.listUrls(views);
    }
    listUrls(views) {
        this.server.get("/", views.home);
        this.server.get("/Teste", views.teste);
        this.server.get("/creat", views.cadastra);
        this.server.get("/updat", views.atualiza);
    }
}

export default urls;