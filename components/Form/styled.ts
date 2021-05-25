import styled from 'styled-components'

export const FormWrapper = styled.form`
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: center;
position: relative;
font-size: .9em;
`

export const FormLabel = styled.label`
display: block;
width: 100%;
color: ${({theme}) => theme.colors.yellow};
`

export const FormTextArea = styled.textarea`
width: 100%;
height: 256px;
font-size: 1em;
background-color: ${({theme}) => theme.colors.black};
border: none;
color: ${({theme}) => theme.colors.white};
margin: .4em 0 0 0;
`

export const FormInput = styled.input`
background-color: ${({theme}) => theme.colors.black};
border: none;
color: ${({theme}) => theme.colors.white};
font-size: 1em;
padding: .2em .4em;
margin: 0 0 0 .8em;
`

export const FormSubmit = styled.input`
background-color: ${({theme}) => theme.colors.yellow};
padding: .2em 1em;
font-size: 1em;
border: none;
`

export const FormRow = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;

@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
    flex-direction: row;
}
`