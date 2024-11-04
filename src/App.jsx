import HomePage from "./components/templates/HomePage"
import Layout from "./layouts/Layout"

function App() {

  return (
    <Layout>
      <div className="dark:bg-gray-900 min-h-screen p-5 ">
        <HomePage />
      </div>
    </Layout>
  )
}

export default App
