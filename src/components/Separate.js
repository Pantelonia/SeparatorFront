import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import * as axios from "axios";

class Separate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            name: "",
            totalCost: 0
        }
    }

    componentDidMount(props) {
        axios.get("https://localhost:44395/api/group/name/" + this.props.name)
            .then(res => {
                const group = res.data;
                this.setState({friends: group.friends});
                this.setState({totalCost:group.totalCost})
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
                <h2>Separate info</h2>
                <ul>
                    {friends.map(friend => (
                        <Grid item  component={Paper}>
                            <li key={friend.id} >
                                <h3>Name of friend {friend.name}</h3>
                                <ul>
                                    {friend.dishes.map(dish =>(
                                        <li key ={dish.id}>
                                            Dish name: {dish.name} Dish cost: {dish.cost}
                                        </li>
                                    ))}
                                </ul>
                                {this.friendCost(friend)}
                            </li>
                        </Grid>
                    ))}
                </ul>
                <h2>Total cost : {this.state.totalCost}</h2>

            </Grid>
        )
    }
    friendCost = (friend) => {
        var cost = 0;
        friend.dishes.map(dish =>(
            cost =+ dish.cost
        ));
        return <h3> Friend cost: {cost}</h3>

    }

}

export default Separate;
