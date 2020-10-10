import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as axios from "axios";
import ShowFriends from "./ShowFriends";

class DeleteFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            isValid: false
        }
        this.onChangeId = this.onChangeId.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    validId = (id) => {
        return Number.isInteger(id)
    }

    onChangeId(e) {
        var val = e.target.value;
        var id = Number(val)
        var valid = this.validId(id)
        this.setState({id: val, isValid: valid});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.isValid === true) {
            axios.delete("https://localhost:44395/api/friend/" + this.state.id)
                .then(res => {
                    const group = res.data;
                    console.log(group)
                });
        } else {
            alert("Incorrect id")
        }

    }


    render() {
        return (
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{
                position: "absolute",
                top: '200px',
                left: '100px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: "15px 100px 15px 100px",
                padding: "40px"

            }}>
                <ShowFriends name={this.props.name}/>
                <form id="deleteFriendForm" onSubmit={this.handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="deleteFriendName"
                        label="Friend Id"
                        name="email"
                        autoComplete="DeleteFriend"
                        autoFocus
                        onChange={this.onChangeId}
                    />
                    <Button
                        id="deleteFriendSub"
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.handleSubmit}
                    >
                        Delete friend
                    </Button>
                </form>
            </Grid>

        )
    }

    // setFriend = (friends) =>{
    //     this.setState({
    //         friends: friends
    //     })
    // }


}

export default DeleteFriend;
