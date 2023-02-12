import { ChangeEvent, FormEvent, useState } from "react";
import Modal from "react-modal";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import axios from "axios";
import { TableListProps } from "../../Interface/TableListProps";

interface newRegisterModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewRegisterModal({ isOpen, onRequestClose }: newRegisterModalProps) {
    
    /*
        const userProps: TableListProps [] = [{
        title: "",
        url: "",
        description: ""
    }]
    */

    const [data, setData] = useState({
        title: "",
        url: "",
        description: ""
    });

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) =>  {
        setData ({...data, [event.target.name]: event.target.value})
        console.log(data);
    }

    const sendData = () => {
        axios.post("http://localhost:3001/register", {
            title: data.title,
            url: data.url,
            description: data.description
        })

        setData({
            title: "",
            url: "",
            description: ""
        })

        window.location.reload();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <Form >
                <h2>Salvar Link</h2>

                <Form.Group>
                    <Form.Label>Título</Form.Label>
                        <Form.Control
                            name="title"
                            type="text"
                            value={data.title}
                            onChange={onChangeInput} 
                        />

                    <Form.Label>URL</Form.Label>
                        <Form.Control
                            name="url"
                            type="text"
                            value={data.url}
                            onChange={onChangeInput}
                        />

                    <Form.Label>Descrição</Form.Label>
                        <Form.Control
                            name="description"
                            type="text"
                            value={data.description}
                            onChange={onChangeInput}
                        />
                </Form.Group>
            </Form>

            <Button onClick={sendData}>Salvar</Button>
        </Modal>
    );
}