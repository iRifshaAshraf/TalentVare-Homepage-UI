import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FindJobs from "./routes/FindJobs";
import Layout from "./components/layout";
import { TopCompanies } from "./routes/TopCompanies";
import { JobTracker } from "./routes/JobTracker";
import { MyCalendar } from "./routes/MyCalendar";
import { Documents } from "./routes/Documents";
import { Messages } from "./routes/Messages";
import { Notifications } from "./routes/Notifications";

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
