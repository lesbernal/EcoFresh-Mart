const { stringify } = require('qs');
const pool = require('./database.js');
const nodemailer = require('nodemailer');

const getAllProduce = async (req, res) => {
    try {
        const [produces] = await pool.promise().query(`
            SELECT produce_id, produce.name AS produce_name, price, inventory, supplier.name AS supplier_name
            FROM supplier, produce
            WHERE produce.supplier_id = supplier.supplier_id`);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, produces}));  // Ensure response is sent
    } catch (err) {
        console.error('Error fetching produce:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Failed to fetch produce' }));
    }
};

const getClassification = async (req, res) => {
    let body = "";

    req.on("data", (chunk) => {
        body += chunk.toString();
    });

    req.on('end', async () => {
        try {
            // Parse the request body
            const parsedBody = JSON.parse(body);
            const { classification  } = parsedBody;

            // Check if produceType is provided
            if (!classification ) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ success: false, message: 'Please choose Fruit or Vegetable' }));
            }

            // Log the produceType to ensure correct data is received
            console.log('Received produceType:', classification );

            // Run the query to fetch produce information
            const [produces] = await pool.promise().query(`
                SELECT produce_id, produce.name AS produce_name, price, inventory, supplier.name AS supplier_name
                FROM produce, supplier
                WHERE produce.supplier_id = supplier.supplier_id AND produce.classification = ?;`, 
                [classification ]
            );

            // Respond with the fetched data
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, produces }));

        } catch (err) {
            // Log the error message for debugging
            console.error('Error fetching produce:', err);

            // Respond with the error message
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, message: 'Failed to fetch produce', error: err.message }));
        }
    });
};

const getAllOrganic = async (req, res) => {
    try {
        const [produces] = await pool.promise().query(`
            SELECT produce_id, produce.name AS produce_name, price, inventory, supplier.name AS supplier_name
            FROM supplier, produce
            WHERE produce.supplier_id = supplier.supplier_id AND isOrganic = TRUE`);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, produces}));  // Ensure response is sent
    } catch (err) {
        console.error('Error fetching produce:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Failed to fetch produce' }));
    }
};

const getAllLocal = async (req, res) => {
    try {
        const [produces] = await pool.promise().query(`
            SELECT produce_id, produce.name AS produce_name, price, inventory, supplier.name AS supplier_name
            FROM supplier, produce
            WHERE produce.supplier_id = supplier.supplier_id AND isLocal = TRUE`);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, produces}));  // Ensure response is sent
    } catch (err) {
        console.error('Error fetching produce:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Failed to fetch produce' }));
    }
};

const getAllPesticideFree = async (req, res) => {
    try {
        const [produces] = await pool.promise().query(`
            SELECT produce_id, produce.name AS produce_name, price, inventory, supplier.name AS supplier_name
            FROM supplier, produce
            WHERE produce.supplier_id = supplier.supplier_id AND Pesticide_Free = TRUE`);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, produces}));  // Ensure response is sent
    } catch (err) {
        console.error('Error fetching produce:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Failed to fetch produce' }));
    }
};

const getAllPrice = async (req, res) => {
    try {
        const [produces] = await pool.promise().query(`
            SELECT produce_id, produce.name AS produce_name, price, inventory, supplier.name AS supplier_name
            FROM supplier, produce
            WHERE produce.supplier_id = supplier.supplier_id
            ORDER BY produce.price`);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, produces}));  // Ensure response is sent
    } catch (err) {
        console.error('Error fetching produce:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Failed to fetch produce' }));
    }
};

module.exports = {
    getAllProduce,
    getClassification,
    getAllOrganic,
    getAllLocal,
    getAllPesticideFree,
    getAllPrice
};