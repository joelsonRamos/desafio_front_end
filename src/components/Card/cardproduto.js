import React, {useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

import {MyCard} from "./styled";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {Carrinho}  from '../Carrinho/Carrinho'


export default function CardProduto({
    products,
}){
    const carro  = useContext(Carrinho)
    const add = products => ()=>{
       carro.adicionarAoCarrinho(products)
    }

    return(
        <>
        <Container >    
        <MyCard>
            <Row >
                {products.map((product, index) => (
                    <Col className="mb-2" key={index}>
                        <Card className='cardproduto'  >
                            <Card.Img variant="top" src="../../product1.png" />
                            <Card.Body>
                            <Card.Title >{product.name}</Card.Title>
                            <Card.Text>
                                {product.descricao}
                            </Card.Text>
                            <p style={{color:'#27ae60'}}>R$ {product.price}</p>
                            <Button variant="warning" onClick={ add(product)}><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> Adicionar</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                ))}

            </Row>
        </MyCard>
        </Container>


        </>
    );
}
