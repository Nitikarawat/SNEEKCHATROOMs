import React, { useState } from "react";
import { Button, Tag, Icon } from "rsuite";
import { auth } from "../../misc/firebase";

const ProviderBlock = () =>
{
    const [isConnected] = useState({
        "google.com":auth.currentUser.providerData.some((data)=> data.providerId==='google.com')
    });
 
    return (
        <div>
            {isConnected['google.com'] && (
                <Tag color ="green">
                  <Icon icon='google' />
                     Connected
                </Tag>
            )};
    

        <div className="mt-2">
            {!isConnected['google.com'] && (
                <Button block color='green'>
                    <Icon icon='google'/>
                    Link to Google
                </Button>
            )};
        </div>

        </div>

    );
}

export default ProviderBlock;