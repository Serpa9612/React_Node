
import express from 'express';
import Entry from '../models/entry.js';

const router = express.Router();

router.get('/entries', async (req, res) => {
  try {
    const entries = await Entry.findAll();
    res.json(entries);
  } catch (error) {
    console.error('Error fetching entries:', error);
    res.status(500).json({ error: 'Error fetching entries' });
  }
});


router.get('/entries/:id', async (req, res) => {
  try {
    const entry = await Entry.findByPk(req.params.id);
    if (entry) {
      res.json(entry);
    } else {
      res.status(404).json({ error: 'Entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching entry' });
  }
});

export default router;
