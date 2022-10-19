import app from './src/App.js';
import { sequelize } from './src/api/database/database.js';
// import { User } from './src/api/modules/users/models/User.js';
// import { Car } from './src/api/modules/cars/models/Car.js';

async function main() {
    try {
        await sequelize.sync();
        // await sequelize.sync({ force: true });
        app.listen(3000);
        console.log('App listen in', 3000);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();
