import SearchBar from "../components/SearchBar"
import IconRow from "../components/IconRow"
import Fidgets from "../components/Fidgets"
import Feed from "../components/Feed"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <SearchBar />
        <IconRow />
        <Fidgets />
        <Feed />
        <Footer />
      </Layout>
      
    </>
  )
}

export default Home