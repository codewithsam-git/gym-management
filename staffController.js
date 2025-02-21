const { where } = require('sequelize');
const { Staff } = require('../models');

class StaffController {

    static saveStaff = async (req, res) => {
        const staffData = req.body;
        try {
            const newStaff = await Staff.create(staffData);
            res.json({ message: "Staff inserted successfully", data: newStaff });
        } catch (error) {
            res.json({ message: error.message });
        }
    }

    static getStaff = async (req, res) => {
        try {
            const allStaffs = await Staff.findAll();
            res.json({message: "Data fetched successfully.", data: allStaffs})
        } catch (error) {
            res.json({message: error.message})
        }
    }

    static deleteStaff = async (req, res) => {
        const id = req.params.id;
        try {
            const getStaff = await Staff.findOne({where: { id: id }});
            if(!getStaff){
                res.json({message: "Staff does not exist."});
            }
            else{
                const deletedStaff = await Staff.destroy({where: { id: id }});
                res.json({message: "Staff deleted successfully.", data: deletedStaff});
            }
        } catch (error) {
            res.json({message: error.message});
        }
    }

    static updateStaff = async (req, res) => {
        const id = req.params.id;
        const staffData = req.body;
        try {
            const getStaff = await Staff.findOne({ where: { id: id } });
            if(!getStaff){
                res.json({message: "Staff does not exist."});                
            }
            else{
                const updateStaff = await Staff.update(
                    staffData,
                    {
                        where: {
                            id: id
                        }
                    }
                )
                res.json({message: "Staff updated successfully.", data: updateStaff});
            }
        } catch (error) {
            res.json({message: error.message})
        }
    }
}

module.exports = StaffController;
