import styled from "styled-components";
import Header from "./components/Header";
import PageContent from "./components/PageContent";
import Footer from "./components/Footer";

const PageContainer = styled.div`
  margin: 0;
  min-height: 100vh;
`

function App({children}) {
  return (
    <PageContainer>
      {children}
      <Header/>
      <PageContent />
      <Footer/>
    </PageContainer>
  );
}

export default App;
