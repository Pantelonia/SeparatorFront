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
            name:"Undefine",
            cost: 0
        }
        this.onChangeId = this.onChangeId.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCost = this.onChangeCost.bind(this);

    }
    onChangeId(e) {
        var val = e.target.value;
        this.setState({id: val});
    }
    onChangeName(e) {
        var val = e.target.value;
        this.setState({name: val});
    }
    onChangeCost(e) {
        var val = e.target.value;
        this.setState({cost: val});
    }
    handleSubmit(e) {
        e.preventDefault();
        axios.put("https://localhost:44395/api/group/addDish",{
            "name": this.state.name,
            "cost": this.state.cost,
            "friendId": this.state.id
        })
            .then(res => {
                const group = res.data;
                console.log(group)
            });
    }


    render() {
        const friends = this.props.friends
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
                <ShowFriends name = {this.props.name}/>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="groupName"
                        label="Dish name"
                        name="email"
                        autoComplete="NewGroup"
                        autoFocus
                        onChange={this.onChangeName}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="groupName"
                        label="Cost of dish"
                        name="email"
                        autoComplete="NewGroup"
                        autoFocus
                        onChange={this.onChangeCost}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="groupName"
                        label="Friend id"
                        name="email"
                        autoComplete="NewGroup"
                        autoFocus
                        onChange={this.onChangeId}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.handleSubmit}
                    >
                        add dish
                    </Button>
                </form>
            </Grid>

        )
    }


}

export default DeleteFriend;
