import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.contactData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
                <td><button onClick={() => props.removeContact(index)}>Delete</button></td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { contactData, removeContact } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody contactData={contactData} removeContact={removeContact} />
            </table>
        );
    }
}
export default Table;