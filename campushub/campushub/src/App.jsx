import Header from "./components/Header"
import Footer from "./components/Footer"
import Form from "./components/Form"
import axios from "./axios"
import "./App.css"

function App() {
  return (
    <>
      <Header />

      <div>
        <h1>Welcome to Campus Hub!!</h1>
      </div>

      <Form />

      <Footer />
    </>
  )
}

export default App