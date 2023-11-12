import styled from "styled-components";

const TitlePageContainer = styled.div`
    position: relative;
    z-index: 1;
`

const FirstTitleContainer = styled.div`
    background-color: #cb4278;
    text-align: center;
    padding: 60px;

    @media only screen and (max-width: 768px) {
        padding: 50px 15px;
    }
`
const FirstTitle = styled.h3`
    font-weight: 100;
    text-transform: uppercase;
    margin: 0 0 20px 0;
    font-size: 28px;

    @media only screen and (max-width: 768px) {
        font-size: 25px;
        line-height: 1.1;
    }
`

const Important = styled.strong`
    font-weight: 700;
`

const Subtitle = styled.p`
    color: white;
    font-size: 18px;
    margin: 0;
    line-height: 1.4;
`

const SecondTitleContainer = styled.div`
    text-align: center;
    margin: 90px 0 40px 0;

    @media only screen and (max-width: 768px) {
        margin: 80px 0 40px 0;
    }
`

const SecondTitle = styled.h1`
    text-transform: uppercase;
    color: white;
    font-weight: 100;
    font-size: 55px;
    margin: 0;

    @media only screen and (max-width: 768px) {
        font-size: 30px;
    }
`

const SecondSubtitle = styled.h5`
    text-transform: uppercase;
    color: #cb4278;
    font-weight: 500;
    font-size: 15px;
    margin: 0;
`

function TitlePage() {
  return (
    <TitlePageContainer>
        <FirstTitleContainer>
            <FirstTitle>A2MI possède une équipe technique <Important>compétente</Important></FirstTitle>
            <Subtitle>Notre équipe polyvalente vous accompagne et vous conseille sur tous vos projets.</Subtitle>
        </FirstTitleContainer>
        <SecondTitleContainer>
            <SecondTitle>L'équipe</SecondTitle>
            <SecondSubtitle>Une équipe à l'écoute de vos besoins</SecondSubtitle>
        </SecondTitleContainer>
    </TitlePageContainer>
  );
}

export default TitlePage;
