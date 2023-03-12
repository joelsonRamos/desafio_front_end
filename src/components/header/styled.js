import styled from "styled-components";

export const AreaHeader = styled.div`
    height: 60px;
    background-color: #20232a;
    margin-bottom: 50px;
    color: #ffff;
    
    

    .container{
        padding: 5px 20px; 
        align-items: center;
        
    }
        .logo{
            display: flex;
            float: left ;
        }
        nav{
            ul{
                display: flex;
                float: right;
            }
            li{
                list-style: none;
                a:link{
                    color: #20232a;
                    text-decoration: none;
                }
                a:visited{
                    color: #ffff;
                    text-decoration: none;
                }
            }
        }
`;