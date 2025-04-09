import SearchBar from "../components/SearchBar"
import IconRow from "../components/IconRow"
import Widget from "../components/Widget"
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
        <Widget />
        <Feed />
        <Footer />
      </Layout>
      
    </>
  )
}

export default Home