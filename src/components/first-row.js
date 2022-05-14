import styled from "styled-components";


const FirstRow = (props) => {
    return (
        <RowLayout>
            <div style={{textAlign: "center"}}>  Dark Eye </div>
            <h4>Dashboard</h4>
            <ScanComponent>
                <CorporateExposedCredentials>
                    <button>                       
                        <img src="/images/exposed-icon.png" alt=""/>
                        <span>Corporate Credential Exposed</span>                     
                        <div className="numbers" id="corporateExposed">64</div>
                    </button>
                     
                </CorporateExposedCredentials> 
                <UsernameMatches>
                <button>              
                        <img src="/images/user-matched.png" alt=""/>
                        <span>User Matched</span>                      
                        <div className="numbers" id="userNameMatches">564</div> 
                </button>
                    
                </UsernameMatches>
                <NoOfTimeExposed>
                    <button>                       
                        <img src="/images/exposed-icon.png" alt=""/>
                        <span>Number of Time Exposed</span>                     
                        <div className="numbers" id="numberOfTimeExposed">10</div> 
                    </button>
                    
                </NoOfTimeExposed>
                <NoOfAttack>
                    <button>
                        <img src="/images/warning.png" alt=""/>
                        <span>Attack Occured</span>                    
                        <div className="numbers" id="numberOfAttack">6</div>       
                    </button>
                    
                </NoOfAttack>
                <AttackPrevented>
                    <button>  
                        <img src="/images/attack-prevented.png" alt=""/>
                        <span>Attack Prevented</span>
                        <div className="numbers" id="numbers attackPrevented">5</div>       
                    </button>
                     
                </AttackPrevented>

            </ScanComponent>
        </RowLayout>
    )
}


const RowLayout = styled.div`
    background-color: #082032;
    position: relative;
    width: 100%;
    div{
        font-size: 40px;
        font-weight: 700;
        padding-left: 10px;
        color: #FF4C29;
        
        
    }
    h4{
        padding: 10px;
        color: #8B9A46;
        background-color: #2D2424;
    }
    button{
        background-color: #212529;
        font-size: 14px;
        width: 210px;
        color: #EEEEEE;
        height: 150px;
        border: none;
        div{
            font-size: 14px;
            color: #EEEEEE;
            
        }
        .flex{
            display: flex;
            justify-content: flex-start;
            overflow: hidden;
            text-overflow: none;
        }
        
    }
`;

const ScanComponent = styled.div`
    display: grid;
    grid-template-areas: "CorporateExposedCredentials UsernameMatches NoOfTimeExposed NoOfAttack AttackPrevented";
`;
const CorporateExposedCredentials = styled.div`
    button{
        color: #EEEEEE;
        font-size: 14px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .numbers{
        font-size: 28px; 
        text-align: center;
        color: #541212;
    }
`;
const UsernameMatches = styled.div`
    button{
        color: #EEEEEE;
        font-size: 14px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
        img{
            width: 48px;
            height: 48px;
        }
    }
    .numbers{
        font-size: 28px; 
        text-align: center;
        color: #541212;
    }
    
`;
const NoOfTimeExposed = styled.div`
    button{
        color: #EEEEEE;
        font-size: 14px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
       
    }
    .numbers{
        font-size: 28px; 
        text-align: center;
        color: #541212;
    }
`;
const NoOfAttack = styled.div`
    button{
        color: #EEEEEE;
        font-size: 14px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .numbers{
        font-size: 28px; 
        text-align: center;
        color: #541212;
    }
`;
const AttackPrevented = styled.div`
    button{
        color: #EEEEEE;
        font-size: 14px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .numbers{
        font-size: 28px; 
        text-align: center;
        color: #541212;
    }
`;

export default FirstRow;