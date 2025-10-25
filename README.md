# Pilot

A modern full-stack web application built with React and Django.

## Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and state management
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### Backend
- **Django 4.2** - Python web framework
- **Django CORS Headers** - Cross-Origin Resource Sharing support
- **SQLite** - Database (development)

## Project Structure

```
pilot/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   └── shared/      # Shared utilities and types
│   ├── package.json
│   └── vite.config.ts
├── backend/           # Django backend application
│   ├── manage.py
│   ├── settings.py
│   ├── urls.py
│   └── requirements.txt
└── thoughts/          # Project planning and documentation
```

## Prerequisites

- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **pip** (Python package manager)

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate a virtual environment:
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run database migrations:
```bash
python manage.py migrate
```

5. Create a superuser (optional):
```bash
python manage.py createsuperuser
```

6. Start the development server:
```bash
python manage.py runserver
```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will automatically open at `http://localhost:3000`

## Available Scripts

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend

- `python manage.py runserver` - Start development server
- `python manage.py migrate` - Run database migrations
- `python manage.py makemigrations` - Create new migrations
- `python manage.py createsuperuser` - Create admin user
- `python manage.py test` - Run tests

## Development

The application is configured for Brazilian Portuguese (pt-br) locale and America/Sao_Paulo timezone. CORS is enabled to allow communication between the frontend and backend during development.

### Important Notes

- The Django secret key in `settings.py` should be changed in production
- `DEBUG = True` should be set to `False` in production
- `ALLOWED_HOSTS` should be properly configured for production
- Consider using PostgreSQL or another production database instead of SQLite

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and not licensed for public use.
