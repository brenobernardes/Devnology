import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./styles";
import Table from "react-bootstrap/Table";

/*
    interface tableList {
    title: string,
    url: string,
    description: string
}
*/

export function TableList () {
    const [list, setList] = useState([{
        title: "",
        url: "",
        description: ""
    }]);

    useEffect(() => {
        axios.get("http://localhost:3001/return")
        .then((res) => {
            setList(res.data);
        })
    }, []);

    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Url</th>
                        <th>Descrição</th>
                    </tr>
                </thead>

                {list.map((props, index) => {
                    return(
                        <tbody key={index}>
                            <tr>
                                <td>{props.title}</td>
                                <td>{props.url}</td>
                                <td>{props.description}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </Table>
        </Container>
    )
}