class urls {
    constructor(server, views) {
        this.server = server;
        this.listUrls(views);
    }
    listUrls(views) {
        this.server.get("/", views.home);
        this.server.get("/Teste", views.teste);
    }
}

export default urls;