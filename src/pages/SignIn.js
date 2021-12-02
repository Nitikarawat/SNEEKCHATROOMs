import React from 'react';
import firebase from 'firebase/app';
import { Container, Grid, Row, Panel, Col, Button, Icon, Alert} from 'rsuite';
import { auth, database } from '../misc/firebase';

const SignIn = () => {
    
    const signInWithProvider = async (provider) =>{
        try
        {
        const { additionalUserInfo, user} = await auth.signInWithPopup(provider); 
        
        if(additionalUserInfo.isNewUser){
             await database.ref(`/profiles/${user.uid}`).set({
              name : user.displayName,
              createdAt : firebase.database.ServerValue.TIMESTAMP
          });
        }
         Alert.success('Signed-In', 4000);
        }

        catch(err)
        {
            Alert.error(err.message, 4000);

        }

    };

   const onGoogleSignIn = () => {
        signInWithProvider(new firebase.auth.GoogleAuthProvider());
    };


    return( 
        <Container>
        <Grid className="mt-page">
        <Row>
        <Col xs={24} md={12} mdOffset={6}>
        <Panel>
        <div className = "text-center">
        <h1>
            Welcome To SNEEK 
        </h1>
        <p>
            Progressive chat platform for everyone
        </p>
        </div>
        <div className = "mt-3">
            <Button block color="green" onClick={onGoogleSignIn}>
                <Icon icon = "google" /> Google Sign-In
            </Button>
        </div>
        </Panel>
        </Col>
        </Row>
        </Grid>
        </Container>
    );

};

export default SignIn;
