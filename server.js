import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ezy-digital', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Contact Form Schema
const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/
  },
  business: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { email, business } = req.body;

    // Validation
    if (!email || !business) {
      return res.status(400).json({ message: 'Email and business type are required' });
    }

    // Create new contact
    const newContact = new Contact({ email, business });
    await newContact.save();

    res.status(201).json({
      message: 'Thank you! We will contact you soon.',
      contact: newContact
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Error submitting form', error: error.message });
  }
});

// Get all contacts (admin route)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contacts', error: error.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
