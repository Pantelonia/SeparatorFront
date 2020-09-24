import React, {Component} from "react";
import * as axios from "axios";

class ShowFriends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
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
            <div>
                <h2>List of my love friends</h2>
                <ul>
                    {friends.map(friend => (
                        <li key={friend.id}>
                            Id {friend.id}: Name {friend.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}

export default ShowFriends;
