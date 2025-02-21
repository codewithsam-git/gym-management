const { member } = require('../models');

class MemberController {

    static saveMember = async (req, res) => {
        const membersData = req.body;
        console.log(req.body);
        try {
            const newMember = await member.create(membersData);
            res.json({ message: "Data inserted", data: newMember });
        } catch (error) {
            res.json({ message: error.message })
        }
    }

    static getMember = async (req, res) => {
        try {
            const allMembers = await member.findAll();
            res.json({ message: "Data fetched successfully.", data: allMembers });
        } catch (error) {
            res.json({ message: error.message })
        }
    }

    static updateMember = async (req, res) => {
        const membersData = req.body;
        const id = req.params.id;
        console.log(membersData, id);
        try {

            const getMember = await member.findOne({ where: { id: id } });
            if (!getMember) {
                res.json({ message: "Member does not exist." });
            } else {
                const updatedMember = await member.update(
                    membersData,
                    {
                        where: {
                            id: id
                        }
                    }
                )
                res.json({ message: "Data updated successfully.", date: updatedMember })
            }
        } catch (error) {
            res.json({ message: error.message })
        }
    }

    static deleteMember = async (req, res) => {
        const id = req.params.id
        try {
            const getMember = await member.findOne({ where: { id: id } });
            if (!getMember) {
                res.json({ message: "Member does not exist." });
            } else {
                const deletedMember = await member.destroy({ where: { id: id } });
                res.json({ message: "Data deleted successfully.", data: deletedMember });
            }

        } catch (error) {
            res.json({ message: error.message })
        }
    }


}

module.exports = MemberController;
