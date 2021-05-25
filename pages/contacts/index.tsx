import React, { useState } from 'react'

import { useTranslation } from 'react-i18next'

import Container from 'components/Container'
import Footer from 'components/Footer'
import { 
    FormWrapper,
    FormLabel,
    FormTextArea,
    FormInput,
    FormSubmit,
    FormRow
} from 'components/Form/styled'

// TODO: Add Formular and Header
const Contacts: React.FC = () => {
    const [textAreaInput, setTextAreaInput] = useState("")
    const [nameInput, setNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [isSending, setIsSending] = useState(false)

    const { t } = useTranslation();

    const fakeSubmit = () => {
        return new Promise((res) => {
            setTimeout(() => {res("")}, 3000)
        })
    }

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        if( nameInput === "" || emailInput === "" || textAreaInput === "" ) {
            return
        }
        setIsSending(true);
        try {
            await fakeSubmit()
            setIsSending(false);
        } catch (error) {
            setIsSending(false);
        }
    }

    const testEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return(re.test(email));
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setEmailInput(e.target.value)
    }

    return (
        <>
            <Footer />
            
            <Container>
                <FormWrapper 
                    onSubmit={handleSubmit}>
                    <FormLabel>
                        napište nám:
                        <FormTextArea value={textAreaInput} onChange={e => setTextAreaInput(e.target.value)} />    
                    </FormLabel>
                    <FormRow>
                        <FormLabel>
                            jméno:
                            <FormInput type="text" value={nameInput} onChange={e => setNameInput(e.target.value)} />
                        </FormLabel>
                        <FormLabel>
                            email:
                            <FormInput type="text" value={emailInput} onChange={handleEmail}/>
                        </FormLabel>
                        <FormSubmit type="submit" value="ODESLAT" disabled={isSending} />
                    </FormRow>
                </FormWrapper>
            </Container>
            
        </>
    )
}

export default Contacts
