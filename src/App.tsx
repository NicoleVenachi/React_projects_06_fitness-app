import Navbar from "@/scenes/navbar";
import { useState } from "react";

import { SelectedPage } from "./shared/types";

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  ); //state para el page selector
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);


  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer /> */}
    </div>
  )
}

export default App
