import { Car } from '../../cars/models/Car.js';
import { User } from '../../users/models/User.js';

export const rentalBuilder = async (data) => {
    const ownerCar = await User.findByPk(data.fk_user);
    const reservatedCar = await Car.findByPk(data.fk_car);

    let totalDays = Math.abs(
        new Date(data.date_start).getTime() - new Date(data.date_end).getTime()
    );
    totalDays /= 1000;
    totalDays /= 84600;
    data.model_car = reservatedCar.model;
    data.brand_car = reservatedCar.brand;
    data.unit_price = reservatedCar.unit_price;
    data.total_price = reservatedCar.unit_price * Math.ceil(totalDays);
    data.username = ownerCar.name;
    data.email = ownerCar.email;
};
