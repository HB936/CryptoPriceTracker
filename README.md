Real-Time Crypto Price Tracker
A React-based real-time cryptocurrency price tracker that displays the latest price, percentage changes (1 hour, 24 hours, 7 days), market capitalization, volume, circulating supply, and charts for top cryptocurrencies. The project utilizes Redux Toolkit for state management, React, TypeScript, and TailwindCSS for styling.



**SETUP INSTRUCTIONS**

1. Clone the Repository

git clone https://github.com/your-username/crypto-price-tracker.git
cd crypto-price-tracker
Replace your-username with your GitHub username if needed.

2. Install Node.js and npm
Make sure you have Node.js and npm installed:

Check versions:

node -v
npm -v
If not installed, Download Node.js.

3. Install react using vite:
write: npm createvite@latest . -- --template=react

select react<typescript

4. Install all dependencies: 
run: npm install

5. Run the project and observe!
RUN USING: npm run dev




**Features**


Real-Time Data: Displays cryptocurrency data with live updates.

Charts: Visual representation of price changes over time using dynamic charts.

State Management: Uses Redux Toolkit for managing state (crypto assets and filter).

Responsive: Fully responsive design with TailwindCSS.

Filters: Filter cryptocurrencies by "All," "Top Gainers," and "Top Losers."

LocalStorage Support: Persist the filter preference using localStorage.

Chart Component: Displays a dynamic chart showing 7-day price trends.

Technologies Used
React: Frontend UI library.

Redux Toolkit: State management.

TypeScript: For type safety.

TailwindCSS: For utility-first CSS styling.

Chart.js: For rendering dynamic charts (price trends).

React-Chartjs-2: React wrapper for Chart.js.

***************************************************************************Project Structure**************************************************************************************
plaintext
Copy
Edit
├── public/
│   ├── index.html
│   ├── ...
├── src/
│   ├── components/
│   │   ├── ChartComponent.tsx          # Renders a chart using Chart.js
│   │   ├── CryptoRow.tsx              # Displays a single crypto row
│   │   └── ...
│   ├── data/
│   │   ├── sampleData.ts              # Sample cryptocurrency data
│   ├── features/
│   │   ├── cryptoSlice.ts             # Redux slice for crypto data
│   ├── App.tsx                        # Main app component
│   ├── index.tsx                      # Entry point for React app
│   └── ...
├── tailwind.config.js                 # TailwindCSS configuration
├── tsconfig.json                      # TypeScript configuration
├── package.json                       # Project dependencies
└── README.md                          # Project README
