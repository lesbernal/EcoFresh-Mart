const { stringify } = require('qs');
const pool = require('./database.js');
const nodemailer = require('nodemailer');

const getAllProduce = async (req, res) => {
    try {
        const [produces] = await pool.promise().query(`
            SELECT produce_id, produce.name AS produce_name, price, inventory, supplier.name AS supplier_name
            FROM supplier, produce
            WHERE produce.supplier_id = produce.supplier_id`);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, produces}));  // Ensure response is sent
    } catch (err) {
        console.error('Error fetching produce:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Failed to fetch produce' }));
    }
};







// Get all Produce
// Get all Supplier

// Get only Fruits
// Get only Vegetables

// Get by lowest to highest price

// Get by organic = true
// get by pesticide = true
// get by local = true
// get by inventory

// get by supplier



module.exports = {
    getAllProduce,
};