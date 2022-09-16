const Contact = require('../models/Contact')

const createContact = async(req, res) => {
    try {
        const contact = await Contact.create(req.body)
        res.status(201).json({ contact })
    } catch (error) {
        console.log(error)
    }
}

module.exports = createContact
