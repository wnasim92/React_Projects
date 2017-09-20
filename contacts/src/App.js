import React, { Component } from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'


// here we are passing the ListContacts Component a prop (aka argument) with contacts array
class App extends Component {
   state = {
      contacts: []
   }
   componentDidMount(){
      ContactsAPI.getAll().then((contacts) => {
         this.setState({contacts})
         // note that you can write the above as this.setState({contacts:contacts}) but if the key and value are the same then you can simplify it as such
      })
   }

   removeContact = (contact) => {
      this.setState((state) => ({
         console2: console.log("before deleting contact", state.contacts),
         console: console.log("Deleted contact", contact),
         contacts: state.contacts.filter((c) =>c.id !== contact.id ),
         console3: console.log("after deleting contact", state.contacts)

      }))
   }

  render() {
    return (
      <div>
        <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
      </div>
    )
  }
}

// exporting App.js file so other files can import
export default App;
