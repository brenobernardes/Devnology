import React from "react";
import { Container, Content } from "./styles";

interface HeaderProps {
    onOpenModal: () => void;
}

export function Header ({ onOpenModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <h1>Gerenciador de Links</h1>

                <button type="button" onClick={onOpenModal}>
                    Salvar Link
                </button>
            </Content>
        </Container>
    )
}