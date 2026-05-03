import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import SottoTitolo from "./components/SottoTitolo"
import TrendingNow from "./components/TrendingNow"
import WatchItAgain from "./components/WatchItAgain"
import NewReleases from "./components/NewReleases"
import Footer from "./components/Footer"
// import Profile from "./components/Profile"
// import Settings from "./components/Settings"

function App() {
  return (
    <>
      <Header></Header>
      {/* PAGINA PRINCIPALE */}
      <SottoTitolo></SottoTitolo>
      <TrendingNow></TrendingNow>
      <WatchItAgain></WatchItAgain>
      <NewReleases></NewReleases>
      {/* FINE PAGINA PRINCIPALE */}

      {/* PAGINA PROFILO */}
      {/* <Profile></Profile> */}
      {/* FINE PAGINA PROFILO */}

      {/* PAGINA IMPOSTAZIONI */}
      {/* <Settings></Settings> */}
      {/* FINE PAGINA IMPOSTAZIONI */}
      <Footer></Footer>
    </>
  )
}

export default App
