import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

class App extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true,
                })
            }).catch((err) => {
                console.log(err);
            });
    }
    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="App">
                <ul>

                    {items.map(item => (
                        <li key={item.id}>
                            <div className="col-6 offset mt-3">
                            <Card>
                                    <CardTitle tag="h5">{item.name}</CardTitle>
                                    <CardText>{item.email}</CardText>
                                    <CardText>{item.phone}</CardText>
                                    <CardText>{item.address.street}-{item.address.city}-{item.address.suite}-{item.address.zipcode}</CardText>
                            </Card>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );

    }

}

export default App;