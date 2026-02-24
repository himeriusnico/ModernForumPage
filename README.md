# ModernForumPage

A modern, full-stack forum web application inspired by Reddit and Stack Overflow. Built with **Laravel**, **Inertia.js**, and **Vue 3** for a seamless single-page application experience — no full page reloads required.

## ✨ Features

- 📋 **Thread & Post Management** — Create, read, update and delete forum threads and replies
- 🗂️ **Categories & Tags** — Organise discussions into topics and tag them for easy discovery
- 🔼 **Upvoting & Downvoting** — Community-driven content ranking (Reddit/Stack Overflow style)
- 💬 **Nested Comments** — Threaded reply support for structured conversations
- 🔍 **Search** — Full-text search across threads and posts
- 🔐 **Authentication** — Secure registration, login, and profile management
- 👤 **User Profiles** — View activity history, reputation, and badges
- 📱 **Responsive Design** — Mobile-first layout powered by Tailwind CSS and Bootstrap 5

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | [Laravel 12](https://laravel.com) (PHP 8.2+) |
| Frontend | [Vue 3](https://vuejs.org) (Composition API) |
| SPA Bridge | [Inertia.js](https://inertiajs.com) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + [Bootstrap 5](https://getbootstrap.com) |
| Build Tool | [Vite](https://vitejs.dev) |
| Database | MySQL / SQLite (configurable) |

## ⚙️ Requirements

- PHP 8.2+
- Composer
- Node.js 18+ and npm
- A supported database (MySQL, PostgreSQL, or SQLite)

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/himeriusnico/ModernForumPage.git
   cd ModernForumPage
   ```

2. **Install PHP dependencies**

   ```bash
   composer install
   ```

3. **Install Node dependencies**

   ```bash
   npm install
   ```

4. **Set up your environment file**

   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Configure your database** in `.env`:

   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=modern_forum
   DB_USERNAME=root
   DB_PASSWORD=
   ```

6. **Run migrations (and optional seeders)**

   ```bash
   php artisan migrate
   # php artisan db:seed   # optional: seed with sample data
   ```

7. **Build frontend assets**

   ```bash
   npm run build
   ```

8. **Start the development server**

   ```bash
   composer run dev
   ```

   This starts the Laravel server, queue worker, and Vite dev server concurrently.

   The application will be available at `http://localhost:8000`.

## 🧪 Running Tests

```bash
composer run test
```

Or directly with PHPUnit:

```bash
php artisan test
```

## 📁 Project Structure

```
ModernForumPage/
├── app/
│   ├── Http/Controllers/   # Laravel controllers
│   └── Models/             # Eloquent models
├── database/
│   ├── migrations/         # Database schema
│   └── seeders/            # Sample data seeders
├── resources/
│   ├── js/                 # Vue components & Inertia pages
│   └── scss/               # Global styles
├── routes/
│   └── web.php             # Application routes
└── vite.config.js          # Vite build configuration
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## 📄 License

This project is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).
