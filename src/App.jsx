import HomePage from "./components/templates/HomePage"
import Layout from "./layouts/Layout"

function App() {

  return (
    <Layout>
      <div className="dark:bg-slate-800  min-h-screen p-5 ">
        <HomePage />
      </div>
    </Layout>
  )
}

export default App
