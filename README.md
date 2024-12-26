# Time Tracker Chrome Extension

A simple yet powerful Chrome extension that tracks the amount of time you spend on different websites. Gain insights into your browsing habits and improve your productivity by identifying distractions.

---

## Features

- **Real-time Tracking** – Monitors time spent on each website while you browse.  
- **Detailed Reports** – View daily, weekly, and monthly summaries of your activity.  
- **Idle Detection** – Automatically pauses tracking when inactive.  
- **Custom Categories** – Group websites into categories like Work, Social Media, and Entertainment.  
- **Focus Alerts** – Set limits and receive notifications if you exceed them.  
- **Data Export** – Export your tracking data as CSV for further analysis.  

---

## How It Works

1. **Active Tab Tracking** – The extension starts a timer when a tab becomes active.
2. **Switch Detection** – Pauses tracking when the tab is inactive and resumes when you return.
3. **Visualization** – View your activity breakdown in the form of graphs and charts.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/time-tracker-extension.git
   ```
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer Mode** (top right corner).
4. Click on **Load Unpacked** and select the cloned project directory.
5. The extension should now appear in your toolbar.

---

## Usage

1. Click on the extension icon to view your daily activity.  
2. Customize website categories by clicking on the **Settings** option.  
3. Use the export button to download CSV reports.  

---

## Development

### Tech Stack
- **Frontend**: HTML, CSS, JavaScript  
- **Storage**: Chrome Storage API  
- **Visualization**: Chart.js  

### Folder Structure
```
|-- src/
|   |-- background.js  // Handles time tracking logic
|   |-- popup.js       // Controls popup interface
|   |-- options.js     // Settings page logic
|-- icons/             // Extension icons
|-- manifest.json      // Chrome extension configuration
|-- popup.html         // Popup UI
|-- options.html       // Settings page UI
```

---

## Contributing

1. Fork the repository.  
2. Create a new branch (`feature/your-feature`).  
3. Commit your changes.  
4. Push to the branch and create a pull request.  

---

## License

This project is licensed under the MIT License.