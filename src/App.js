import React, {Component} from "react";
import  * as axios from 'axios'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: []
        };
    }

    async componentDidMount() {
        axios.get("https://localhost:44395/api/group/")
            .then(res => {
                const groups = res.data;
                this.setState({groups:groups})
        })
        console.log(this.state.group)
    }

    render() {
        const { groups } = this.state;
        return (
            <ul>
                {groups.map(group => (
                    <li key={group.name}>
                        {group.name} {group.age}
                    </li>
                ))}
            </ul>

        )
    }

}

export default App