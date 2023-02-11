import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./styles";
import Table from "react-bootstrap/Table";
import { TableListProps } from "../../Interface/TableListProps";

export function TableList () {    

    const itemsList: TableListProps [] = [{
        title: "",
        url: "",
        description: ""
    }];

    const [list, setList] = useState(itemsList);

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