import React from 'react'
import {Button,Row, Col} from 'react-bootstrap'

export default () => {
    return (
        <Row style={{borderBottom: '1px solid #ccc'}}>
            <Col xs={3} md={2} style={{padding: "10px"}}>
               <div></div>
            </Col>
            <Col xs={12} md={8} style={{textAlign: "center"}}><h1>Cygnis Snakebot Tournament</h1></Col>
            <Col xs={3} md={2} style={{padding: "10px"}}>
            </Col>
        </Row>
    )
}