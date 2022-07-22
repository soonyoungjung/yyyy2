import styled from "styled-components";

const Navigation = () => {
    return (
        <NavigationStyled>
            <div> 코멘토 쇼핑</div>
        </NavigationStyled>
    );
};

const  NavigationStyled = styled.div`
position: relative;
padding: 20px;
font-weight: 700;
font-size: 18px;
line-height: 26px;
display: flex;
align-items: center;
justify-content: center;
border-bottom: solid 1px #eeeeee;  ;

`;


export default Navigation;
