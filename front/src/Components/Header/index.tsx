import React from "react";
import { Container,Content } from "./styles";

export function Header () {
    return (
        <Container>
            <Content>
                <h1>Gerenciador de Links</h1>

                <button>
                    Salvar Link
                </button>
            </Content>
        </Container>
    )
}