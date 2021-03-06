import React, { useEffect, useRef, useState } from 'react';
import { Divider } from 'rsuite';
import CreateRoomBtnModal from './CreateRoomBtnModal';
import DashboardToggle from './dashboard/DashboardToggle';
import ChatRoomList from './rooms/ChatRoomList';

const Sidebar = () =>{
    
    const topSideBarRef = useRef();
    const [Height, setHeight] = useState(0);
     
    useEffect( () => {
         if(topSideBarRef.current){
             setHeight(topSideBarRef.current.scrollHeight);
         }
        },[topSideBarRef]);
        
    return(
        <div className="h-100 pt-2">
            <div ref={topSideBarRef}>
                <DashboardToggle />
                <CreateRoomBtnModal/>
                <Divider>
                    Join Conversations
                </Divider>
            </div>
        <ChatRoomList aboveElHeight={Height} />
        </div>

    );
};

export default Sidebar;