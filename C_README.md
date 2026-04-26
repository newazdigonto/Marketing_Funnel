# Ezy Digital Hub - Landing Page

A modern, sales-focused landing page for Ezy Digital Hub built with **MERN Stack** (MongoDB, Express, React, Node.js), **Tailwind CSS**, and **Glassy Effects**.

## 🎨 Features

- **Modern Design**: Glassmorphism effects with smooth gradients
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **Dark Theme**: Professional dark UI with blue/cyan gradients
- **Smooth Animations**: Fade-in and slide-up animations
- **Contact Form**: Backend-integrated form submission with MongoDB
- **SEO Optimized**: Meta tags and structured content
- **Fast Performance**: Optimized with Vite bundler
- **Production Ready**: Clean, maintainable code structure

## 📋 Tech Stack

### Frontend
- React 18+
- Tailwind CSS 3
- Vite (Build tool)
- Lucide React (Icons)

### Backend
- Node.js + Express
- MongoDB (Database)
- Mongoose (ODM)
- CORS enabled

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- MongoDB running locally or MongoDB Atlas connection string
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd ezy-digital-hub
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env
```
Edit `.env` with your configuration:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ezy-digital
NODE_ENV=development
```

4. **Start MongoDB**
```bash
# If using local MongoDB
mongod

# Or use MongoDB Atlas (update MONGODB_URI in .env)
```

### Development

**Option 1: Run both server and client concurrently**
```bash
npm run dev-all
```

**Option 2: Run separately**

Terminal 1 - Backend:
```bash
npm run dev
```
Server runs on: `http://localhost:5000`

Terminal 2 - Frontend:
```bash
npm run client
```
Frontend runs on: `http://localhost:3000`

### Production Build

```bash
# Build frontend
npm run build

# Start server (serves built frontend)
npm start
```

## 📁 Project Structure

```
ezy-digital-hub/
├── src/
│   ├── pages/
│   │   └── EzyDigitalLanding.jsx    # Main landing page component
│   ├── App.jsx                       # App wrapper
│   ├── main.jsx                      # React entry point
│   └── index.css                     # Tailwind + custom styles
├── index.html                        # HTML entry point
├── server.js                         # Express server
├── vite.config.js                    # Vite configuration
├── tailwind.config.js                # Tailwind configuration
├── postcss.config.js                 # PostCSS configuration
├── package.json                      # Dependencies
├── .env.example                      # Environment template
└── README.md                         # Documentation
```

## 🎨 Customization

### Colors & Styling
Edit `src/index.css` or `tailwind.config.js` to customize:
- Primary colors (blue/cyan)
- Background gradients
- Animations

### Content
Edit `src/pages/EzyDigitalLanding.jsx`:
- Services list
- Industries served
- FAQ items
- Copy and messaging

### Form Endpoints
Backend contact form endpoint: `POST /api/contact`
- Accepts: `{ email, business }`
- Stores in MongoDB
- Admin endpoint: `GET /api/contacts`

## 🔧 API Endpoints

### Public
- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

### Admin
- `GET /api/contacts` - Get all contacts (add auth in production)

## 📱 Features Explained

### Glassy Effects
- Backdrop blur with transparency
- Gradient overlays
- Soft borders with white/color opacity
- Smooth hover transitions

### Animations
- Page load fade-in effects
- Scroll-based animations (can be enhanced)
- Hover scale and color transitions
- Smooth scrolling

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile
- Grid layouts that adapt
- Touch-friendly buttons

## 🚨 Important Notes

1. **MongoDB Setup**: Make sure MongoDB is running or configure MongoDB Atlas
2. **CORS**: Currently allows all origins. Restrict in production:
```javascript
app.use(cors({
  origin: 'https://yourdomain.com'
}));
```

3. **Form Validation**: Add server-side validation before production
4. **Authentication**: Admin routes should be protected
5. **Rate Limiting**: Add rate limiting for form submissions in production

## 📦 Deployment

### Deploy to Vercel (Frontend + Backend)
1. Create `api/` directory with serverless functions
2. Configure `vercel.json`
3. Deploy with `vercel`

### Deploy to Heroku (Backend)
```bash
heroku create ezy-digital-hub
heroku config:set MONGODB_URI=your_mongodb_uri
git push heroku main
```

### Deploy Frontend to Netlify
```bash
npm run build
# Connect to GitHub and deploy from netlify.com
```

## 🔐 Security Checklist

- [ ] Add input validation on backend
- [ ] Implement rate limiting
- [ ] Add CSRF protection
- [ ] Secure MongoDB connection
- [ ] Set secure CORS policy
- [ ] Add authentication for admin routes
- [ ] Use HTTPS in production
- [ ] Add environment variable validation

## 📈 Performance Tips

- Lazy load images
- Implement code splitting
- Enable compression
- Cache static assets
- Optimize bundle size
- Use CDN for assets

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution**: Start MongoDB or update MONGODB_URI

### Port Already in Use
```
Error: listen EADDRINUSE :::5000
```
**Solution**: Change PORT in .env or kill process on port 5000

### CORS Error
**Solution**: Check server CORS configuration and allowed origins

## 📝 License

MIT License - feel free to use for your projects

## 🤝 Support

For issues or questions, create an issue in the repository or contact the development team.

## 🎯 Future Enhancements

- [ ] Blog section
- [ ] Case studies carousel
- [ ] Testimonials slider
- [ ] Email verification
- [ ] Analytics integration
- [ ] Live chat support
- [ ] Newsletter subscription
- [ ] Multi-language support

---

**Built with ❤️ for Ezy Digital Hub**
