# Martin's FC ⚫🔴⚪

Welcome to **Martin's Football Club**, the official college football team of **St. Martin's Engineering College, Hyderabad**. This website showcases our squad, memorable moments, and trophies.

## 🚀 Tech Stack
This project is built using:
- **Next.js** - React framework for server-side rendering and static site generation.
- **Prisma** - ORM for database interactions.
- **Supabase** - PostgreSQL database hosting.
- **Tailwind CSS** - Utility-first CSS framework for styling.

---

## 📂 Project Structure
```
├── components        # Reusable UI components
│   ├── Navbar.tsx   # Navigation bar
│   ├── TeamPage.tsx # Displays team players
│   ├── PlayerCard.tsx # Individual player cards
├── pages            # Application pages
│   ├── index.tsx    # Home page
│   ├── about.tsx    # About page
│   ├── team.tsx     # Team section
├── utils            # Utility functions
│   ├── supabaseClient.ts # Supabase connection
├── prisma           # Prisma schema and migrations
│   ├── schema.prisma # Database schema
│   ├── migrations    # Database migrations
├── public           # Static assets (images, logos)
├── styles           # Global styles
└── .env             # Environment variables
```

---

## 🏗️ Setup Instructions
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/martins-fc.git
cd martins-fc
```

### 2️⃣ Install Dependencies
```sh
yarn install  # or npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file and add:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-key
DATABASE_URL=your-prisma-database-url
```

### 4️⃣ Run the Development Server
```sh
yarn dev  # or npm run dev
```
The site will be available at **http://localhost:3000**.

---

## 🛠️ Database Setup with Prisma & Supabase
### 1️⃣ Push Prisma Schema to Supabase
```sh
npx prisma db push
```

### 2️⃣ Generate Prisma Client
```sh
npx prisma generate
```

### 3️⃣ Seed Initial Data (Players, Squad, etc.)
```sh
npx prisma db seed
```

---

## 🏆 Features
✅ **Dynamic Team Section** – Fetches players from Supabase dynamically.  
✅ **Smooth Scrolling Navigation** – Clicking "Team" scrolls to the team section.  
✅ **Fully Responsive Design** – Optimized for mobile and desktop views.  
✅ **Scalable Backend** – Uses Supabase as the database.  

---

## 🔗 Contribution Guide
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m "Added new feature"`
4. Push to your branch: `git push origin feature-branch`
5. Open a Pull Request.

---

## 📞 Contact
For any queries, feel free to reach out at **saurabhchaudhary.net@gmail.com**.

⚽ Built with ❤️ by **Martin's FC Team**.

