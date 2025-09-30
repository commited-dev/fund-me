# Fund Me

Fund Me is a modern startup incubator web application designed to connect innovators with resources, mentorship, and funding opportunities.

## 🚀 Features

- Authentication with Google (NextAuth)
- Modern UI built with Next.js 15 and Tailwind CSS v4
- Custom branding (blue–purple gradient theme + rocket icon)
- User dashboard for managing startup projects
- Community features (lists, voting, saving for later)
- Scalable architecture with multi-stage environments (dev, pre-prod, prod)

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind v4
- **Auth**: NextAuth with Google provider
- **Backend (future)**: Node.js / Express or NestJS (TypeScript, MongoDB)
- **Dev Tools**: Docker, Prettier, ESLint, GitHub Projects

## 📦 Getting Started

### Prerequisites

- Node.js v22+
- Docker Desktop (optional, for containerized setup)
- npm installed globally

### Installation

```bash
# Clone the repository
git clone https://github.com/commited-dev/fund-me
cd fund-me

# Install dependencies
npm install

# Run the development server
npm run dev
```

### Environment Variables

Create a `.env.local` file with:

```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_random_secret
```

## 📄 License

MIT License © 2025 Fund Me
