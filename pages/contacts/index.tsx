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
    const [textAreaInput, setTextAreaInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [isSending, setIsSending] = useState(false);

    const { t } = useTranslation();

    return (
        <>
            <Footer />
            
            <Container>
                <FormWrapper>
                    <FormLabel>
                        napište nám
                        <FormTextArea value={textAreaInput} onChange={e => setTextAreaInput(e.target.value)} />    
                    </FormLabel>
                    <FormRow>
                        <FormLabel>
                            jméno
                            <FormInput type="text" value={nameInput} onChange={e => setNameInput(e.target.value)} />
                        </FormLabel>
                        <FormLabel>
                            email
                            <FormInput type="email" value={emailInput} onChange={e => setEmailInput(e.target.value)}/>
                        </FormLabel>
                        <FormSubmit type="submit" value="submit" disabled={isSending} />
                    </FormRow>
                </FormWrapper>
            </Container>
            
        </>
    )
}

export default Contacts
