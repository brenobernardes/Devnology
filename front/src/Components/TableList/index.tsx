import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./styles";
import Table from "react-bootstrap/Table";
import { TableListProps } from "../../Interface/TableListProps";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { FormDialog } from "../FormDialog/FormDialog";

export function TableList (props:any) {    

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

    const [open, setOpen] = useState(false);

    const handleClickDialogOpen = () => {
        setOpen(true);
    }

    return (
        <>
            <FormDialog 
                open={open} 
                setOpen={setOpen}
                id={props.id}
                title={props.title}
                url={props.url}
                description={props.description}
                list={props.list}
                setList={props.setOpen}
            />
            
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
                                            onClick={() => {
                                                handleClickDialogOpen();
                                            }}
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
        </>
        
    )
}