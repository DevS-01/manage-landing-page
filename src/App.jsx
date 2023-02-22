import React from "react"
import Navbar from "./Navbar"
import Stats from "./Stats"
import Keypoints from "./Keypoints"
import Testimonial from "./Testimonial"
import Footer from "./Footer"
import Newsletter from "./Newsletter"

function App() {

  return (
    <div className="container">
      <Navbar />
      <Stats />
      <Keypoints />
      <Testimonial />
      <Footer />
      <Newsletter />
    </div>
  )
}

export default App
