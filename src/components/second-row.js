import styled from "styled-components";
import {Table} from 'react-bootstrap';
import {ScanningButtonLeft , ScanningButtonRight} from "./functionalButton";
import Chart from "./chart";




const SecondRow = (props) => {
    return (
        <Report>
            <div id = "report">
                <Scan> 
                    <section id ="left">
                        <span>
                            <img src="/images/scan-logo.png" alt=""/>
                        </span>
                        <span>
                            <h4>Manual Scan</h4>
                            <hr/>
                            <h6>Last Scan: 12 hours ago</h6>
                            <ScanningButtonLeft >Scan now</ScanningButtonLeft>
                        </span>
                        
                    </section>
                    <section id= "right">
                        <span>
                            <img src="/images/schedule.png" alt=""/>
                        </span>
                        <span>
                            <h4>Schedule Scan</h4>
                            <hr/>
                            <ScanningButtonRight>Schedule Scan</ScanningButtonRight>
                        </span>
                         
                    </section>  
                </Scan>

                <Graph>
                    <Chart></Chart>
                </Graph>
            </div>
            <History>
                
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Recent Scans</th>
                        <th>Run Type</th>
                        <th>Status</th>
                        <th>User Matches</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Manual</td>
                        <td>Finished</td>
                        <td>564</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Schedule</td>
                        <td>Schedule at 10:30</td>
                        <td>--</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Schedule</td>
                        <td>Finished</td>
                        <td>300</td>
                        </tr>
                    </tbody>
                </Table>
            </History>
        </Report>
    )
}

    
const Report = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 250px;  
    row-gap: 10px;
    column-gap: 10px;
    padding-top: 10px;
    div{
        display: grid;
        grid-template-areas: "Scan Graph";
        grid-template-rows: auto; 
    }
`;
const Scan = styled.div`
 background-color: #212529;

 
 #left{
     display: flex;
     margin-top: 30px;
 }
 #right{
     display: flex;
     margin-top: 30px;
 }
 section{
    
        img{
            margin: 10px;
             
            }
        
        h4{
         padding-top: 10px;
         color: #711A75;
         text-align: center;
         font-weight: 600;
        }
        hr{
            color: #EEEEEE;
            height: 2px;
        }
        h6{
            color: #8B9A46;
            font-size: 10px;
            margin-left: 55px;
        }
    
    button{
        margin-left: 10px;
        margin-top: 10px;
        display: flex;
        border: none;
    } 
        
}`;
const Graph = styled.div`
   height : 200px;
   width: 500px;
   margin-left: 20px;
   
`;
const History = styled.table`
    background-color: #082032  ;
    
`;


export default SecondRow;