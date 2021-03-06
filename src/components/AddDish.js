import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as axios from "axios";
import ShowFriends from "./ShowFriends";

class AddDish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "Undefine",
            cost: 0,
            validateId: false,
            validateCost: false
        }
        this.onChangeId = this.onChangeId.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCost = this.onChangeCost.bind(this);

    }

    validId = (id) => {
        const {friends} = this.props;
        var found = false;
        for(var i = 0; i < friends.length; i++) {
            if (friends[i].id === id) {
                found = true;
                break;
            }
        }
        return found
    }
    onChangeId(e) {
        var val = e.target.value;
        var id = Number(val)
        var valid =this.validId(id)
        this.setState({id: id, validateId: valid});
    }

    onChangeName(e) {
        var val = e.target.value;
        this.setState({name: val});
    }

    validCost = (cost) =>{
        return Number.isInteger(cost)
    }
    onChangeCost(e) {
        var val = e.target.value;
        var cost = Number(val);
        var valid =this.validCost(cost)
        this.setState({cost: val, validateCost: valid});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.validateCost === true && this.state.validateId === true) {
            axios.put("https://localhost:44395/api/group/addDish", {
                "name": this.state.name,
                "cost": this.state.cost,
                "friendId": this.state.id
            })
                .then(res => {
                    const group = res.data;
                    console.log(group)
                });
        } else{
            if(this.state.validateId === true){
                alert("Incorrect cost:" + this.state.cost)
            }
            else {
                alert("Incorrect friend id:" + this.state.id)
            }
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
                <form id = "addDishForm" onSubmit={this.handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="newDishName"
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
                        id="dishCost"
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
                        id="addedFriendId"
                        label="Friend id"
                        name="email"
                        autoComplete="NewGroup"
                        autoFocus
                        onChange={this.onChangeId}
                    />
                    <Button
                        id="submitDish"
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

export default AddDish
