import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, Formlabel, FormWrap, Icon,Text } from './SigninElements'

const SignIn = () => {
    return (
        <>
           <Container>
                <FormWrap>
                    <Icon to="/">Intelpik</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <Formlabel htmlFor='for'>Email</Formlabel>
                            <FormInput type='email' required/>
                            <Formlabel htmlFor='for'>Password</Formlabel>
                            <FormInput type='password' required/>
                            <FormButton type="submit" >Sign In</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>   
            </Container> 
        </>
    )
}

export default SignIn;
