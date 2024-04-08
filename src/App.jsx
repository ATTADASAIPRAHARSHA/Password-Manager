import Navbar from './components/Navbar'
import Manger from './components/Manger'
function App() {
  return (
    <>
    <Navbar/>
    <div className='bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]'>
    <Manger/>
    </div>
    </>
  )
}

export default App
