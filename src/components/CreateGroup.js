import React, {Component} from "react";
import * as axios from "axios";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import {Redirect} from "react-router-dom";

class CreateGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            friend: "Organizer",
            rederect: false
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeFriend = this.onChangeFriend.bind(this);

    }


    handleSubmit(e) {
        e.preventDefault();
        axios.post('https://localhost:44395/api/group/', {"name": this.state.name})
            .then(response => this.setState({Id: response.data.id}))
            .catch(error => {
                this.setState({errorMessage: error.message});
                console.error('There was an error!', error);
            });
        this.setState({
            redirect: true
        })
    }

    onChangeName(e) {
        var val = e.target.value;
        this.setState({name: val});
    }

    onChangeFriend(e) {
        var val = e.target.value;
        this.setState({friend: val});
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={{pathname:'/main', state: {name: this.state.name}}}/>
        }
    }


    render() {
        return (
            <Box color="text.primary"
                 style={{position	: "absolute",
                     top		: '200px',
                     left		: '100px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="groupName"
                        label="Group Name"
                        name="email"
                        autoComplete="NewGroup"
                        autoFocus
                        onChange={this.onChangeName}
                    />
                    {/*<TextField*/}
                    {/*    variant="outlined"*/}
                    {/*    margin="normal"*/}
                    {/*    required*/}
                    {/*    fullWidth*/}
                    {/*    name="friend"*/}
                    {/*    label="First friend"*/}
                    {/*    type="friend"*/}
                    {/*    id="friend"*/}
                    {/*    autoComplete="current-password"*/}
                    {/*    onChange={this.onChangeFriend}*/}
                    {/*/>*/}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.handleSubmit}
                    >
                        Create group
                    </Button>
                </form>
                {this.renderRedirect()}
            </Box>


        )
    }

}

export default CreateGroup;
