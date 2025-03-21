const actions = require('./action');


function routes(req, res) {
    const URL = req.url;
    const method = req.method;

    console.log(`Incoming request: ${method} ${URL}`);
    if (URL.startsWith('/allproduce') && method === 'GET') {
        return actions.getAllProduce(req, res);
    }
    if (URL.startsWith('/getclassification') && method === 'POST') {
        return actions.getClassification(req, res);
    }
    if (URL.startsWith('/getorganic') && method === 'GET') {
        return actions.getAllOrganic(req, res);
    }
    if (URL.startsWith('/getlocal') && method === 'GET') {
        return actions.getAllLocal(req, res);
    }
    if (URL.startsWith('/getpesticidefree') && method === 'GET') {
        return actions.getAllPesticideFree(req, res);
    }
    if (URL.startsWith('/getprice') && method === 'GET') {
        return actions.getAllPrice(req, res);
    }
    if (URL.startsWith('/getinventory') && method === 'POST') {
        return actions.getInventory(req, res);
    }
    if (URL.startsWith('/getsupplier') && method === 'POST') {
        return actions.getSupplier(req, res);
    }
    
    

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route Not Found" }));
};

module.exports = routes;