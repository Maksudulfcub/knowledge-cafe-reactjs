
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='max-w-6xl mt-5 mx-auto'>
      <Navbar></Navbar>
      <Blogs></Blogs>
    </div>
  )
}

export default App
