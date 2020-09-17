import React, {Component} from "react";
import * as axios from "axios";

class CreateGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    onChange(e) {
        var val = e.target.value;
        this.setState({name: val});
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>Имя:</label><br />
                        <input type="text" value={this.state.name} onChange={this.onChange}/>
                    </p>
                    <input type="submit" value="Отправить" />
                </form>
            </div>


        )
    }

}
export default CreateGroup
