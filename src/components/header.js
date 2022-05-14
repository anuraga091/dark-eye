import styled from "styled-components";
import Button from 'react-bootstrap/Button';

const Header = (props) => {
    function changeBackground(e) {
        e.target.style.background = '#0d6efd';
    }

    function backToOriginal(e) {
        e.target.style.background = '#212529';
    }
    return (
        <Sidebar>
            <div>
                <img src="/images/logo.jpg" alt=""/>
                <span>Apni Sec Private Limited</span>
            </div>
            <hr/>

            <Button href ="/" variant="primary" size="lg" active>
                {/* <img src="/images/dashboard-icon.png" alt=""/> */}
                Dashboard
            </Button>{' '}
            
            <Button href ="/" onMouseOver={changeBackground} onMouseOut={backToOriginal} variant="dark" size="lg" active>
                {/* <img src="/images/user-icon.png" alt=""/>  */}
                User 
            </Button>{' '}
            
            <Button href ="/" onMouseOver={changeBackground} onMouseOut={backToOriginal} variant="dark" size="lg" active>
                {/* <img src="/images/security-icon.png" alt=""/>   */}
                Security
            </Button>{' '}
            
            <Button href ="/" onMouseOver={changeBackground} onMouseOut={backToOriginal}  variant="dark" size="lg" active>
                {/* <img src="/images/setting-icon.png" alt=""/> */}
                Settings
            </Button>{' '}
          
        </Sidebar>
    );
}

const Sidebar = styled.nav`
    display: flex;
    flex-direction: column;
    background-color: #082032;
    height: 750px;
    
    div{
        display: flex;
        flex-direction: row;
        text-align: center;
        border: none;
        
        img{
            padding: 5px;
            margin: 2vh 5px 0;
            width: 8vh;
            height: 5vh;
            background-color: #0F0E0E;
            border-radius: 50%;
            border: none;
        }
    }
    hr{
        font-weight: 800;
        height: 3px;
        color: #EEEEEE;
    }
    button{
        display: flex;
        justify-content: flex-start;
    }
    span{
        color: #EEEEEE;
        text-align: center;
        padding: 20px 10px 0;
        font-weight: 700;
    }
    
`;



export default Header;