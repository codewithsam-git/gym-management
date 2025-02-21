const { Package } = require('../models');

class PackageController {

    static savePackage = async (req, res) => {
        const packageData = req.body;
        try {
            const newPackage = await Package.create(packageData);
            res.json({ message: "Package inserted successfully", data: newPackage });
        } catch (error) {
            res.json({ message: error.message });
        }
    }

    static getPackage = async (req, res) => {
        try {
            const allPackages = await Package.findAll();
            res.json({ message: "Data fetched successfully.", data: allPackages });
        } catch (error) {
            res.json({ message: error.message });
        }
    }

    static updatePackage = async (req, res) => {
        const packageData = req.body;
        const id = req.params.id;
        console.log(packageData, id);
        try {

            const getPackage = await Package.findOne({ where: { id: id } });
            if (!getPackage) {
                res.json({ message: "Package does not exist." });
            } else {
                const updatedPackage = await Package.update(
                    packageData,
                    {
                        where: {
                            id: id
                        }
                    }
                )
                res.json({ message: "Data updated successfully.", date: updatedPackage })
            }
        } catch (error) {
            res.json({ message: error.message });
        }
    }
    
    static deletePackage = async (req, res) => {
        const id = req.params.id;
        try {
            const getPackage = await Package.findOne({where : { id: id }});
            if(!getPackage){
                res.json({message: "Package does not exist."})
            }
            else{
                const deletedPackage = await Package.destroy({ where: { id: id } });
                res.json({ message: "Data deleted successfully.", data: deletedPackage });
            }            
        } catch (error) {            
            res.json({ message: error.message });
        }
    }
}

module.exports = PackageController;
