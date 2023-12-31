# Welcome to Journal where your Ideas, Document, & Plans. Unified.
![journal](https://github.com/JoeTechx/journal/assets/81165398/a12868a7-be36-40e0-bfc1-0317afd37452)
![journal-removebg-preview](https://github.com/JoeTechx/journal/assets/81165398/5431103f-a96b-4453-9f32-c0068db47eee)



This is a repository for Fullstack Journal
### Popular Technologies
Next.js 13,
React,
Convex,
Tailwind,
Edgestore,
Clerk

Key Features:

- Real-time database  🔗
- Notion-style editor 📝
- Light and Dark mode 🌓
- Infinite children documents 🌲
- Trash can & soft delete 🗑️
- Authentication 🔐
- File upload
- File deletion
- File replacement
- Icons for each document (changes in real-time) 🌠
- Expandable sidebar ➡️🔀⬅️
- Full mobile responsiveness 📱
- Publish your note to the web 🌐
- Fully collapsible sidebar ↕️
- Landing page 🛬
- Cover image of each document 🖼️
- Recover deleted files 🔄📄

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone git@github.com:JoeTechx/journal.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

### Setup Convex

```shell
npx convex dev

```

### Start the app

```shell
npm run dev
```