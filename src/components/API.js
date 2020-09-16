import React, {Component} from "react";
import  * as axios from 'axios';
class API extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [],
            name: "",
            id: 0
        };

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlerDelete = this.handlerDelete.bind(this);
        this.changeId = this.changeId.bind(this);
    }

    async componentDidMount() {
        axios.get("https://localhost:44395/api/group/")
            .then(res => {
                const groups = res.data;
                this.setState({groups:groups})
            })
        console.log(this.state.group)
    }

    onChange(e) {
        var val = e.target.value;
        this.setState({name: val});
    }

    handleSubmit(e) {
        e.preventDefault();
        const article = { title: 'React POST Request Example' };
        axios.post('https://localhost:44395/api/group/', {"name" : this.state.name, "totalCost": 999})
            .then(response => this.setState({ Id: response.data.id }))
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }

    handlerDelete(e) {
        e.preventDefault();
        deleteData(this.state.id, 'https://localhost:44395/api/group')

    }

    changeId(e){
        var val = e.target.value;
        this.setState({id: val});
    }

    render() {
        const { groups } = this.state;
        return (
            <div>
                <ul>
                    {groups.map(group => (
                        <li key={group.name}>
                            {group.id} {group.name} {group.totalCost}
                        </li>
                    ))}
                </ul>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <p>
                            <label>Имя:</label><br />
                            <input type="text" value={this.state.name} onChange={this.onChange}/>
                        </p>
                        <input type="submit" value="Отправить" />
                    </form>
                </div>
                <div>

                    <form onSubmit={this.handlerDelete}>
                        <label>
                            Person ID:
                            <input type="text" name="id" onChange={this.changeId} />
                        </label>
                        <button type="submit">Delete</button>
                    </form>
                </div>

            </div>


        )
    }

}

function deleteDatas(item, url) {
    return fetch(url + '/' + item, {
        method: 'delete'
    })
        .then(response => response.json());
}
function deleteData(item, url) {
    return axios.delete(url + '/' + item)
        .then(res => {
            console.log(res);
            console.log(res.data);
            alert("You delete thaat gays id:" +  item);
        })
}

export default  API