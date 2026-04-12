# Welcome to Expo Todo app 👋

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

3. Build app

<!-- for ios -->

```bash
npx expo run:ios
```

## 📁 .env Setup

Create a `.env` file in the project root:

```env
CONVEX_DEPLOYMENT=<get_it_from_convex>
EXPO_PUBLIC_CONVEX_URL=<get_it_from_convex>
```

## Run the app

```bash
npm install
npx expo start
```

## Run the Convex db

- Open a seperate terminal and run;

```bash
npx convex dev
```

## to export the app

```bash
npx expo export
```

## 🧑‍🍳 App Features Overview

- 📝 **Todos Tab**
  - ➕ Add new tasks
  - ✅ Mark as completed / uncompleted
  - 📝 Edit existing tasks
  - 🗑️ Delete tasks
  - 📊 Live **progress bar** at the top

- ⚙️ **Settings Tab**
  - 📈 View task stats (total, completed, remaining)
  - 🌙 Toggle **Dark Mode** (actually works!)
  - 🔔 Notification toggle (UI only)
  - 🔄 Auto-sync toggle (UI only)
  - 🚨 **Danger Zone** to delete everything

- 🔄 **Real-Time Sync**
  - All updates reflect **instantly** across devices
  - Powered by **Convex** database

---
