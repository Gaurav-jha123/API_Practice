const { City } = require('../models/index');


class CityRepository{
    async creatCity ({ name }){
        try {
            const city = await City.create ({ name});
            return city;
        }catch (error){
            console.log("Something went wrong at repo layee willl handle better suing cutom eros and loggers");
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where : {
                    id : cityId
                }
            });
            return true;
            }catch(error){
            throw {error};
        }

    }

    async updateCity(cityId , {name}){
        try {
            const city = await City.findBy(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in repo layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try{
            const city = await City.update(data, {
                where : {
                    id : cityId
                }
            });
            return city;
        }catch(error){
            console.log("Something went wrong in repo layer");
            throw {error};
        }

    }
}

module.exports = CityRepository