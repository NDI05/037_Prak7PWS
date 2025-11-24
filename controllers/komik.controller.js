const db = require('../models');
const komikService = require('../services/komik.service');


// Controller to get all komiks
async function createKomik(req, res) {
    try {
        const komikData = req.body;
        if (req.file) {
            komikData.imageType = req.file.mimetype;
            komikData.imageName = req.file.originalname;
            komikData.imageData = req.file.buffer;
        }

        const newKomik = await komikService.createKomik(db, komikData);
        res.status(201).json(newKomik);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getAllKomiks(req, res) {
    try {
        const komiks = await komikService.getAllKomiks(db);
        res.status(200).json(komiks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getKomikById(req, res) {
    try {
        const id = req.params.id;
        const komik = await komikService.getKomikById(db, id);
        if (!komik) {
            return res.status(404).json({ error: 'Komik not found' });
        }
        res.status(200).json(komik);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateKomik(req, res) {
    try {
        const id = req.params.id;
        const updateData = req.body;
        if (req.file) {
            updateData.imageType = req.file.mimetype;
            updateData.imageName = req.file.originalname;
            updateData.imageData = req.file.buffer;
        }
        
        const updatedKomik = await komikService.updateKomik(db, id, updateData);
        res.status(200).json(updatedKomik);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function deleteKomik(req, res) {
    try {
        const id = req.params.id;
        await komikService.deleteKomik(db, id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createKomik,
    getAllKomiks,
    getKomikById,
    updateKomik,
    deleteKomik
};