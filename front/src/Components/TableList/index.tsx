import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./styles";
import Table from "react-bootstrap/Table";
import { TableListProps } from "../../Interface/TableListProps";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface HeaderProps {
    onOpenModal: () => void;
}

export function TableList ({ onOpenModal }: HeaderProps) {    

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
                        <th>Ação</th>
                    </tr>
                </thead>

                {list.map((props, index) => {
                    
                    const handleDelete = (id:any) => {
                        id = props.id;
                        axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
                            window.location.reload();
                        })
                    }
                    
                    return(
                        <tbody key={index}>
                            <tr>
                                <td>{props.title}</td>
                                <td>{props.url}</td>
                                <td>{props.description}</td>
                                <td>
                                    <EditIcon 
                                        type="button"
                                        onClick={onOpenModal}
                                    />
                                    <DeleteIcon 
                                        type="button" 
                                        onClick={handleDelete}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </Table>
        </Container>
    )
}