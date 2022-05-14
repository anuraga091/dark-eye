import styled from "styled-components";
import Header from "./header";
import FirstRow from "./first-row";
import SecondRow from "./second-row";

const Dashboard = (props) => {
    return (
      <Container>
        <Layout>
            <Header/>
            <Row>
                <FirstRow/><SecondRow/>
            </Row>
        </Layout>
    </Container>
    )

}

const Container = styled.div`
    max-width: 100%;
`;
const Layout = styled.div`
  display: grid;
  grid-template-areas: "header Row";
  grid-template-columns: minmax(0, 5fr) minmax(0, 18fr) ;
  column-gap: 10px;
`;
const Row = styled.div`
    display: grid;
    grid-template-rows: 300px 500px;

`;

export default Dashboard;