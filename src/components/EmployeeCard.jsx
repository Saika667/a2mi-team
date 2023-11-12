import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import useWindowDimensions from "../hooks/useWindowDimensions";

const EmployeeCardContainer = styled.div`
    display: flex;
`

const AnimationWrapper = styled.div`
    display: flex;

    &.reverse {
        border-radius: 80px 50pc 50pc 80px;
        flex-direction: row-reverse;
    }
`

const Wrapper = styled.div`
    display: flex;
    width: 50%;
    min-width: 700px;
    margin: 30px 100px;
    padding: 10px;
    border-radius: 50pc 80px 80px 50pc;
    box-shadow: 0 0 17px 1px rgba(203,66,120,0.71);
    align-items: center;
    background: rgba(255,255,255, .1);

    &.reverse {
        border-radius: 80px 50pc 50pc 80px;
        flex-direction: row-reverse;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        min-width: unset;
        margin: 30px 10px;
        flex-direction: column;
        border-radius: 30px;

        &.reverse {
            flex-direction: column;
            border-radius: 30px;
        }
    }

    @media only screen and (min-width: 769px) and (max-width: 1200px) {
        width: 70%;
        min-width: unset;
    }
`

const ImageContainer = styled.div`
    width: 180px;
    min-width: 180px;
    height: 180px;
    border-radius: 50%;
    overflow: hidden;
`

const Image = styled.img`
    width: 100%;
`

const DescriptionContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    padding: 0 0 0 25px;

    &.reverse {
        align-items: flex-end;
        padding: 0 25px 0 0;
        text-align: end;
    }

    @media only screen and (max-width: 768px) {
        align-items: center;
        text-align: center;
        padding: 0;

        &.reverse {
            align-items: center;
            text-align: center;
            padding: 0;
        }
    }
`

const EmployeeName = styled.span`
    font-size: 25px;
    font-weight: 700;
`

const JobTitle = styled.span`
    text-transform: uppercase;
    color: #cb4278;
    font-weight: 500;
`

const EmployeeDescription = styled.p`
    margin: 10px 0;
`

function EmployeeCard({ imageSrc, imageAlt, name, job, employeeDescription, reverseDisplay}) {
    const { width } = useWindowDimensions();
    const isMobile = width < 769;
    return (
    <EmployeeCardContainer>
        <Fade 
            right={reverseDisplay === 'odd' && !isMobile}
            left={reverseDisplay === 'even' && !isMobile}
            top={isMobile}
        >
            <AnimationWrapper className={reverseDisplay === "odd" ? "reverse" : ""}>
                <Wrapper className={reverseDisplay === "odd" ? "reverse" : ""}>
                    <ImageContainer>
                        <Image src={imageSrc} alt={imageAlt}/>
                    </ImageContainer>
                    <DescriptionContainer className={reverseDisplay === "odd" ? "reverse" : ""}>
                        <EmployeeName>{name}</EmployeeName>
                        <JobTitle>{job}</JobTitle>
                        <EmployeeDescription>{employeeDescription}</EmployeeDescription>
                    </DescriptionContainer>
                </Wrapper>
            </AnimationWrapper>
        </Fade>
    </EmployeeCardContainer>
  );
}

export default EmployeeCard;
