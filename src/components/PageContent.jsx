import styled from "styled-components";
import TitlePage from "./TitlePage";
import EmployeeCard from "./EmployeeCard";
import employee from "../assets/employeeA.jpg";
import employeeOne from "../assets/employeeB.jpg";
import employeeTwo from "../assets/employeeC.jpg";
import leftbackground from "../assets/background-left.png";
import rightbackground from "../assets/background-right.png";
import { Background, Parallax } from "react-parallax";
import employeeData from "../data/employee";

console.log(employeeData);

const BodyContainer = styled.div`
    padding: 15px 0 0 0;
    position: relative;
    overflow: hidden;
    padding-bottom: 85px;

    .parallax-container {
        position: absolute !important;
        width: 100%;
        height: 100%;

        @media only screen and (max-width: 768px) {
            display: none;
        }
    }
`

const BodyContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 1400px;
    margin: auto;

    & :nth-child(even) {
        justify-content: flex-end;
    }
`

const Img = styled.img`
`

function PageContent() {
  return (
    <BodyContainer>
        <Parallax strength={800} className="parallax-container">
            <Background>
                <Img src={leftbackground} alt="Image de fond à gauche. Nuage de points reliés"/>
            </Background>
        </Parallax>
        <Parallax strength={1500} className="parallax-container">
            <Background>
                <Img src={rightbackground} alt="Image de fond à droite. Nuage de points reliés"/>
            </Background>
        </Parallax>
        <TitlePage />
        <BodyContent>
            { employeeData.map((employee, index) => (
                <EmployeeCard
                    reverseDisplay={index % 2 === 0 ? 'even' : 'odd'}
                    imageSrc={employee.image}
                    imageAlt={`Photo de l'employé ${employee.name}`}
                    name={employee.name}
                    job={employee.job}
                    employeeDescription={employee.description}
                    key={index}
                />
            ))}
        </BodyContent>
    </BodyContainer>
  );
}

export default PageContent;
