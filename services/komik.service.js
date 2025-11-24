async function createKomik(database, KomikData){
    const { title, description, author, imageType, imageName, imageData } = KomikData;

    if(!title || !author || !description){
        throw new Error('Title, Author, and Description are required fields.');
    }

    const newKomik = await database.Komik.create({
        title,
        description,
        author,
        imageType,
        imageName,
        imageData
    });

    return newKomik;
}

async function getAllKomiks(database){
    const komiks = await database.Komik.findAll();

    return komiks.map(k => {
        if (k.imageData) {
            k.imageData = k.imageData.toString('base64');
        }
        return k;
    });
}

async function getKomikById(database, id){
    const komik = await database.Komik.findByPk(id);
    return komik;
}

async function updateKomik(database, id, updateData){
    const komik = await database.Komik.findByPk(id);
    if(!komik){
        throw new Error('Komik not found');
    }
    
    await komik.update(updateData);
    return komik;
}
async function deleteKomik(database, id){
    const komik = await database.Komik.findByPk(id);
    if(!komik){
        throw new Error('Komik not found');
    }
    
    await komik.destroy();
    return;
}

module.exports = {
    createKomik,
    getAllKomiks,
    getKomikById,
    updateKomik,
    deleteKomik
};