import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FindJobs from "./components/pages/FindJobs";
import Layout from "./components/layout";
import { TopCompanies } from "./components/pages/TopCompanies";
import { JobTracker } from "./components/pages/JobTracker";
import { MyCalendar } from "./components/pages/MyCalendar";
import { Messages } from "./components/pages/Messages";
import { Notifications } from "./components/pages/Notifications";
import { Documents } from "./components/pages/Documents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes using the same layout */}
        <Route element={<Layout />}>
          <Route index element={<FindJobs />} />
          <Route path="/topCompanies" element={<TopCompanies />} />
          <Route path="/jobTracker" element={<JobTracker />} />
          <Route path="/myCalendar" element={<MyCalendar />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          {/* <Route path="/job-tracker" element={<JobTracker />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
