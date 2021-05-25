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
display: flex;
flex-wrap: wrap;
width: 100%;
color: ${({theme}) => theme.colors.yellow};
font-family: sourceCodeVariable;
margin: 0 0 2rem 0;
`

export const FormTextArea = styled.textarea`
width: 100%;
height: 256px;
font-size: 1em;
background-color: ${({theme}) => theme.colors.black};
border: none;
color: ${({theme}) => theme.colors.white};
padding: 1rem;
margin: 1rem 0 0 0;
resize: none;
`

export const FormInput = styled.input<{isInValid?: boolean}>`
background-color: ${({theme}) => theme.colors.black};
border: solid 2px ${({isInValid}) => (isInValid)? "red" : "transparent" };
color: ${({theme}) => theme.colors.white};
font-size: 1em;
padding: .5rem 1rem;
margin: 0 1.6rem 0 1.6rem;
flex-grow:1;
`

export const FormSubmit = styled.input`
background-color: ${({theme}) => theme.colors.yellow};
padding: .6rem 7rem;
margin: 0 0 2rem 0;
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

export const TopMargin = styled.div`
    margin-top: 10%;
`