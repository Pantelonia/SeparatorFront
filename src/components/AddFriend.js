import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as axios from "axios";

class AddFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Unnamed"
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    onChangeName(e) {
        var val = e.target.value;
        this.setState({name: val});
    }
    handleSubmit(e) {
        e.preventDefault();
        axios.put("https://localhost:44395/api/group/" + this.props.id, {
            "name": this.state.name,
            "dish": [],
            "groupId": this.props.id
        })
            .then(res => {
                const group = res.data;
                console.log(group)
            });
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
                <form id = "createFriendForm" onSubmit={this.handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="newfriendName"
                        label="Friend name"
                        name="friend"
                        autoComplete="NewGroup"
                        autoFocus
                        onChange={this.onChangeName}
                    />
                    <Button
                        id = "newFriendSub"
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.handleSubmit}
                    >
                        Add friend
                    </Button>
                </form>
            </Grid>

        )
    }


}

export default AddFriend;
