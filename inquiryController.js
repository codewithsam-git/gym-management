const { where } = require('sequelize');
const { Inquiry } = require('../models');

class InquiryController {

    static saveInquiry = async (req, res) => {
        const inquiryData = req.body;
        try {
            const newInquiry = await Inquiry.create(inquiryData);
            res.json({ message: "Inquiry inserted successfully", data: newInquiry });
        } catch (error) {
            res.json({ message: error.message });
        }
    }

    static getInquiry = async (req, res) => {
        try {
            const allInquiries = await Inquiry.findAll();
            res.json({ message: "Data fetched successfully.", data: allInquiries });
        } catch (error) {
            res.json({ message: error.message });
        }
    }

    static updateInquiry = async (req, res) => {
        const inquiryData = req.body;
        const id = req.params.id;
        try {
            const getInquiry = await Inquiry.findOne({where: { id: id }});
            if(!getInquiry){
                res.json({message: "Inquiry does not exist."});                
            }
            else{
                const updatedInquiry = await Inquiry.update(
                    inquiryData,
                    {
                        where: {
                            id: id
                        }
                    }
                )
                res.json({message: "Data updated successfully.", data: updatedInquiry});
            }
        } catch (error) {
            res.json({message: error.message});
        }
    }
    
    static deleteInquiry = async (req, res) => {
        const id = req.params.id;
        try {
            const getInquiry = await Inquiry.findOne({where : { id: id }});
            if(!getInquiry){
                res.json({message: "Inquiry does not exist."})
            }
            else{
                const deletedInquiry = await Inquiry.destroy({ where: { id: id } });
                res.json({ message: "Data deleted successfully.", data: deletedInquiry });
            }            
        } catch (error) {            
            res.json({ message: error.message });
        }
    }
}

module.exports = InquiryController;
