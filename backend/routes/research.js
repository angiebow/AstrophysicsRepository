const express = require('express');
const router = express.Router();
const Research = require('../models/Research');
const { verifyToken, isResearcher } = require('../middleware/authJwt'); // Corrected path

router.post('/', [verifyToken, isResearcher], async (req, res) => {
  const research = new Research(req.body);
  await research.save();
  res.status(201).send(research);
});

router.get('/', async (req, res) => {
  const research = await Research.find();
  res.status(200).send(research);
});

router.put('/:id', [verifyToken, isResearcher], async (req, res) => {
  const research = await Research.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).send(research);
});

router.delete('/:id', [verifyToken, isResearcher], async (req, res) => {
  await Research.findByIdAndRemove(req.params.id);
  res.status(204).send();
});

module.exports = router;