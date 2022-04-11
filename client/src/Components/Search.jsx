
import * as React from 'react';
import Button from "@mui/material/Button";
import {
    Autocomplete, ClickAwayListener,
    List,
    ListItem, ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Popover,
    TextField,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import agent from "../Data/agent";
import Box from "@mui/material/Box";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setTask} from "../store/Slices/taskSlice";
import {stringAvatar} from "../Utils/stringAvatar";
import Avatar from "@mui/material/Avatar";

export const Search = ({handleSubmit}) => {
    const dispatch = useDispatch()
    const {task} = useSelector(state => state.task)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchText, setSearchText] = useState('');
    const [usersQuery, setUsersQuery] = useState([]);
    const [textAreaClicked, setTextAreaClicked] = useState(false)
    const {projectId} = useParams()
    
    useEffect(() => {
        
    }, [usersQuery])

    
    

    return (
        <ClickAwayListener onClickAway={() => setTextAreaClicked(false)}>
        <div style={{marginTop:'5px'}}>
            
            <TextField
                onChange={async (e) => {
                    setSearchText(e.target.value)
                    let users = await agent.account.getAll(searchText)
                    if(searchText.length === 0) {setUsersQuery([])} else {setUsersQuery(users)}
                }} 
                value={searchText}  label="Search User" sx={{bgcolor: 'white'}}
                onClick={() => setTextAreaClicked(true)}
            />
            
            
                {
                    textAreaClicked ? (
                        <Box sx={{ width: '95%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <List sx={{
                                width: '100%',
                                maxWidth: 360,
                                bgcolor: 'background.paper',
                                position: 'relative',
                                overflow: 'auto',
                                maxHeight: 300,
                                '& ul': { padding: 0 },
                            }}
                                  subheader={<li />}>
                                {
                                    usersQuery.map(user => (
                                        <ListItem sx={{padding: 0}}>
                                            <ListItemButton onClick={() => handleSubmit(user)}>
                                                <ListItemAvatar>
                                                    <Avatar {...stringAvatar(`${user.firstName} ${user.lastName}`)}
                                                            key={user.id} sx={{bgcolor: `${user.firstName} ${user.lastName}`.toColor()}}/>
                                                </ListItemAvatar>
                                                <ListItemText primary={user.userName} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))
                                }

                            </List>
                        </Box>
                    ) : (
                        <></>
                    )
                }   
            
            
        </div>
        </ClickAwayListener>
    );
};