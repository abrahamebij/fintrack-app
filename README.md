# **FinTrack - Wallet Ledger Dashboard**

This project is my implementation of the **Wallet Ledger Dashboard** as part of the **Resilience 17 Venture Studio Frontend Engineer Assessment**.

It demonstrates my ability to:

* Build a **responsive, pixel-accurate UI** from a Figma design.
* Use **React, Next.js, and TypeScript** with a clean, modular component architecture.
* Handle **state management** for sorting and dynamic interactions.
* Deploy a production-ready application to the cloud (Vercel).



## **Live Demo & Repository**

* **Live App**: [https://fintrack-dashboard.vercel.app](https://fintrack-app-rouge.vercel.app)
* **GitHub Repository**: [https://github.com/abrahamebij/fintrack-app](https://github.com/yourusername/fintrack)
<img width="1326" height="825" alt="download (2)" src="https://github.com/user-attachments/assets/54c8e053-9b14-4a1e-9c11-3ae8d7725a15" />


---

## **Features Implemented**

### **1. Header Section**

* Navigation with **FinTrack logo** and **user avatar**.
* **Search** functionality (UI implemented, ready for integration).
* **Wallet Ledger** title with **active status** indicator.
* **User avatars group** (Ava, Liam, Noah +12 others).
* **Tabs** for switching between **Overview** and **Transactions**.

### **2. Summary Cards**

* **Total Balance**: \$12,345 (+5%).
* **Total Credits**: \$7,890 (+3%).
* **Total Debits**: \$4,455 (-2%).
* **Transactions**: 150 (+10%).

### **3. Transaction Table**

* **Sortable columns**: Sort transactions by Date and Amount.
* **Color-coded types**: Green for credits, red for debits.
* **Responsive layout** for mobile and desktop.
* **Hover states** for interactive feedback.

### **4. State & Error Handling**

* **TypeScript interfaces** for transaction and dashboard summary data.
* **Empty state** handling when there are no transactions.
* **Graceful fallbacks** for invalid/missing data.

---

## **Tech Stack**

* **Framework**: [Next.js 15](https://nextjs.org/) (React + TypeScript)
* **Deployment**: [Vercel](https://vercel.com/)

---

## **Project Structure**

```bash
/app             # Route to the main page
/components
  /layout        # Sidebar, Header, Tabs
  /ui            # UI components
  /table         # TransactionTable & Sorting logic
/context         # Context for sidebar
/data            # Mock transaction data
/public          # Public assets
/styles
  globals.css    # Global styles
/types
  index.ts       # TypeScript interfaces
```

---

## **Getting Started**

### **1. Clone Repository**

```bash
git clone https://github.com/abrahamebij/fintrack-app.git
cd fintrack
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Run Development Server**

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### **4. Build for Production**

```bash
npm run build
npm start
```

---

## **Why This Matters**

This build demonstrates:

* **Pixel-perfect execution** of a Figma design.
* **Component-based architecture** for scalability.
* **Attention to detail** in UI/UX and state handling.
* **Fast turnaround** while maintaining clean, maintainable code.

---

**Author:** Abraham Ebijuni
**Submission for:** Resilience 17 Venture Studio – Frontend Engineer Assessment
