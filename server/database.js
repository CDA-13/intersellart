const mongoose = require('mongoose');

module.exports = () => {
    mongoose
        .connect('mongodb+srv://florian:NhKlTD4KGgtOQy4P@cluster0.d2znx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('connexion reussie'))
        .catch(() => console.log('connexion échouée'));
};
