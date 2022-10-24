// Write your Character component here
import styled from 'styled-components';

const StyledCharDiv = styled.div`
    padding: 0.25em;
    margin: 1em;
    font-size: 2em;
    border: 2px solid green;
    color: green;
    background: grey;
`;

const StyledBirthYear = styled.button`
    padding: 0.25em;
    border-raduis: 30px;
    background: grey;
    margin: 1em;
    font-size: 0.75em;
`;


const Character = props => (
    <StyledCharDiv>
        {props.name}
        <StyledBirthYear>{props.birth_year}</StyledBirthYear>
    </StyledCharDiv>
)

export default Character;