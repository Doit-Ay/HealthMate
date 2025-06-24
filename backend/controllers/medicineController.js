// backend/controllers/medicineController.js

const db = require("../config/db");

// Helper to convert empty strings to null for database insertion
const toNull = (value) => (value === "" ? null : value);

const addMedicine = (req, res) => {
  const { name, dosage, method, start_date, end_date, notes } = req.body;

  const sql = `
    INSERT INTO medicines (name, dosage, method, start_date, end_date, notes)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  // Use toNull to handle optional date fields
  const values = [
    name,
    dosage,
    method,
    toNull(start_date),
    toNull(end_date),
    notes,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("❌ Error adding medicine:", err); // This log is crucial!
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.status(201).json({ message: "✅ Medicine added successfully!" });
  });
};

const getAllMedicines = (req, res) => {
  const sql = "SELECT * FROM medicines ORDER BY medicine_id DESC";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Error fetching medicines:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.status(200).json(results);
  });
};

const deleteMedicine = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM medicines WHERE medicine_id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("❌ Error deleting medicine:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Medicine not found" });
    }
    res.status(200).json({ message: "✅ Medicine deleted successfully" });
  });
};

const updateMedicine = (req, res) => {
  const id = req.params.id;
  const { name, dosage, method, start_date, end_date, notes } = req.body;

  const sql = `
    UPDATE medicines 
    SET name = ?, dosage = ?, method = ?, start_date = ?, end_date = ?, notes = ?
    WHERE medicine_id = ?
  `;

  const values = [
    name,
    dosage,
    method,
    toNull(start_date),
    toNull(end_date),
    notes,
    id,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("❌ Error updating medicine:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Medicine not found" });
    }
    res.status(200).json({ message: "✅ Medicine updated successfully" });
  });
};

// Export all functions in a single, clean object
module.exports = {
  addMedicine,
  getAllMedicines,
  deleteMedicine,
  updateMedicine,
};