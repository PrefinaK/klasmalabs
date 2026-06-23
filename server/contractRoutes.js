const express = require('express');
const router = express.Router();

// POST /api/contract
router.post('/', (req, res) => {
  const { action, walletAddress, propertyId } = req.body;

  if (!action || !walletAddress) {
    return res.status(400).json({ error: 'Missing required fields: action, walletAddress' });
  }

  const mockTxHash = '0x' + [...Array(64)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

  return res.status(200).json({
    success: true,
    action,
    walletAddress,
    propertyId: propertyId || null,
    txHash: mockTxHash,
    timestamp: new Date().toISOString(),
    message: `Contract action '${action}' simulated successfully.`,
  });
});

module.exports = router;