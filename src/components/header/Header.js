import React, {useContext} from 'react';
import {Link} from "react-router-dom"
import {AreaHeader} from "./styled"
import Badge from 'react-bootstrap/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {Carrinho}  from '../Carrinho/Carrinho'

function Header(){
    const carro  = useContext(Carrinho)
    const itemCount = Object.keys(carro.carrinho).length
 
    return (
        <AreaHeader>
            <div className='container'>
                
                <div className='logo'>
                    <Link to="/">
                    <img src='../logo192.png' alt='logo' width={40}/>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                        <Link to="/carrinho">
                        
                            <FontAwesomeIcon icon={faCartShopping} size="2x"></FontAwesomeIcon> 
                                {itemCount>0 && <Badge bg="danger">{itemCount} </Badge>} 
                            
                        </Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    );
}
export default Header;