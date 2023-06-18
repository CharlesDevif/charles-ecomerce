const db = require('./data/connect')
const { add, getAll, getById, modif, del } = require('./model/product')
const { inscription, connexion } = require('./model/user')

db.connect()

setTimeout(async () => {
    console.log(await getAll());
    // console.log(await getById(3));
    // console.log(await add("Pack Tome 1&2", "none", 46.00, "http://localhost:3000/img-products/pack-tome-1-tome-2.jpg"));
    // console.log(await modif(2, 'test modif', 'description modifié', 10, ""));
    // console.log(await del(13));
 
    // console.log(await inscription('julien@jdedev.fr', 'test'));
    // console.log(await connexion('julien2@jdedev.fr', 'test2'));
}, 2000)