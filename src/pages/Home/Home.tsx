import { DefaultContainer } from "@/components/DefaultContainer";
import { Layout } from "@/components/Layout";
import { Cards } from "@/components/Tasks/components";

const Home = () => {
  return (
    <Layout>
      <DefaultContainer>
        <Cards />
      </DefaultContainer>
    </Layout>
  )
}

export default Home;