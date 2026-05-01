import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import SottoTitolo from "./components/SottoTitolo"
import TrendingNow from "./components/TrendingNow"
import WatchItAgain from "./components/WatchItAgain"
import NewReleases from "./components/NewReleases"

function App() {
  return (
    <>
      <Header></Header>
      <SottoTitolo></SottoTitolo>
      <TrendingNow></TrendingNow>
      <WatchItAgain></WatchItAgain>
      <NewReleases></NewReleases>
    </>
  )
}

export default App
