import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import * as axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class DeleteDish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            name: ""
        }
    }

    componentDidMount(props) {
        axios.get("https://localhost:44395/api/group/name/" + this.props.name)
            .then(res => {
                const group = res.data;
                this.setState({friends: group.friends})
            });
    }

    render() {
        const friends = this.state.friends
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
                <h2>List of friend's dish</h2>
                <ul>
                    {friends.map(friend => (
                        <li key={friend.id}>
                            Id {friend.id}: Name {friend.name}
                            <ul>
                                {friend.dishes.map(dish =>(
                                    <li key ={dish.id}>
                                        Dish id: {dish.id} Dish name: {dish.name} Dish cost: {dish.cost}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
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

export default DeleteDish;
