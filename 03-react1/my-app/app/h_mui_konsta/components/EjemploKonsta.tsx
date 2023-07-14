import {App} from "konsta/react";
import {ListItem, Navbar} from "konsta/react";
import {BlockTitle, Page} from "konsta/react";
import {Button} from "@mui/material";

export default function EjemploKonsta(){
    return (
        <>
            <App theme="material">
                <Page>
                    <Navbar
                        title="List"/>
                    <BlockTitle>
                        Links, Header, Footer
                    </BlockTitle>
                        <ListItem
                            link
                            header={
                                <Button variant='outlined'>
                                    HOLA MUI</Button>
                            }
                            title="Jhon Doe"
                            after="Edit"/>
                </Page>
            </App>
        </>
    )
}