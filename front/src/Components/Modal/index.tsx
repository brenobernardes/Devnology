import { ChangeEvent, FormEvent, useState } from "react";
import Modal from "react-modal";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
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

    const [user, setUser] = useState({
        title: "",
        url: "",
        description: ""
    });

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) =>  {
        setUser ({...user, [event.target.name]: event.target.value})
        console.log(user);
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
                            value={user.title}
                            onChange={onChangeInput} 
                        />

                    <Form.Label>URL</Form.Label>
                        <Form.Control
                            name="title"
                            type="text"
                            value={user.url}
                            onChange={onChangeInput}
                        />

                    <Form.Label>Descrição</Form.Label>
                        <Form.Control
                            name="title"
                            type="text"
                            value={user.description}
                            onChange={onChangeInput}
                        />
                </Form.Group>
            </Form>

            <Button>Salvar</Button>
        </Modal>
    );
}