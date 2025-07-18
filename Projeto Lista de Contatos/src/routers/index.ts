import express from 'express';
import { createContact, deleteContact, getContacts } from '../services/contacts';

const router = express.Router();

router.post('/contato', async (req, res) => {
    const { name } = req.body;
    if (!name || name.length < 2) {
        return res.json({
            error: 'Name is required'
        });
    }
    await createContact(name as string)
    res.status(201).json({ contato: name })
});

router.get('/contatos', async (req, res) => {
    let list = await getContacts()
    res.json({ contatos: list });
});

router.delete('/contato', async (req, res) => {
    const {name} = req.query;
    if (!name) {
        return res.json({error: 'Precisa mandar um nome para excluir.'});
    }
    await deleteContact(name as string);
    res.json({contato: name});
});

export default router;