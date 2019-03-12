import React, {Component} from 'react';
import '../css/style.css';

import Header from './Header';
import MainContent from './MainContent';

    class App extends Component{

        //adding a feature to create a new guest:

        //I'll need a method to add a guest by setting the state of guests.
            //it will need a function that gets the text value of the input field when submit is clicked.  
            //Then, I want for the text value of the field to be set to blank.
        //I will need a new guest to be added to the end of the guest array.  
        //the name will be the value received from the input function, isConfirmed will be set to false, and isEditing will be set to false.

        //this method will need to be defined in the App component.  
        //I'll pass it into a new component (Create Guest) as a prop, and attach it to the submit button, onClick.

            //don't have a state that can be derived from another state.
        state = {
            isFiltered: false,
            pendingGuest: "",
            guests: []
        }   


            
            //pass ID as a prop into the guest component
            //replace index with ID whenever a specific component is referred to


        generateID = () => {
            let id = Math.random();
            console.log(id);
            return id;
        }

            //input here comes from the closure created when the prop is passed.
            //the closure gives access to target.value

            //handles name input for creating new guest
        handleNameInput = (e) => {
            this.setState({
                pendingGuest: e.target.value
            });
        }

            //handles updating guest state to include new guest
        handleNewGuestSubmit = (e) => {
                //stops submit from hard refreshing the page
            e.preventDefault();
            this.setState({
                guests: [
                        //creates new guest
                    {   
                        name: this.state.pendingGuest,
                        isConfirmed: false,
                        isEditing: false,
                        id: this.generateID()
                    },
                        //spreads the remaining guests into the new guest state
                    ...this.state.guests
                ],
                pendingGuest: ""
            })
        }

            //takes in a property, and index to change, sets state
        toggleGuestPropertyAt = (property, idToChange) => {
            this.setState({
                //maps guests to new array
                guests: this.state.guests.map((guest) => {
                    //returns matching index number as opposite boolean
                    if (guest.id === idToChange) {
                        return {
                            //spreads remaining properties
                            ...guest,
                                //feature to be toggled
                            [property]: !guest[property]   //computed property name
                        }
                    }
                    //if it's not the targeted item, return it unchanged
                    return guest;
                })
            });
        }

            //toggles confirmation
        toggleConfirmationAt = index => {
            this.toggleGuestPropertyAt("isConfirmed", index)
        }

            //removes guest  Index is passed down through a closure in GuestList
        removeGuestAt = idToRemove => {
            this.setState({
                    //filters guests by having a different id than the targeted one
                guests: this.state.guests.filter(guest => idToRemove !== guest.id)
            });
        }
            //uses parent function to set state
        toggleEditingAt = id => {
            this.toggleGuestPropertyAt("isEditing", id)
        }

            //toggles the filter for guest items
        toggleFilter = () => {
            this.setState({
                isFiltered: !this.state.isFiltered
            })
        }


            //returns number invited
        getTotalInvited = () => this.state.guests.length;

            //gets number confirmed
        getTotalConfirmed = () => {
                //counter for guests
            let i = 0;
            this.state.guests.forEach(el => {
                if(el.isConfirmed === true){
                    i++
                } 
            });
            return i;
        }
            //get total unconfirmed
        getUnconfirmedGuests = (total, confirmed) => {
            return (total - confirmed);
        }

            //sets name of guest when edited
         setNameAt = (name, idToChange) => {
             this.setState({
                    //maps guests to new array
                 guests: this.state.guests.map((guest) => {
                        //checks guest's id number to parameter id
                     if (guest.id === idToChange) {
                         return {
                                //spreads remaining properties
                             ...guest,
                                //name to be changed
                             name 
                         }
                     }
                     //if it's not the targeted item, return it unchanged
                     return guest;
                 })
             });
         }

        render(){
                //these values are set here so that they can be passed to Counter as numbers
            const numberInvited = this.getTotalInvited();
            const numberConfirmed = this.getTotalConfirmed();
            const numberUnconfirmed = this.getUnconfirmedGuests(numberInvited, numberConfirmed);

            return(
                <div className="App">
                    <Header
                        handleInput = {this.handleNameInput}
                        currentInput = {this.state.pendingGuest}
                        handleSubmit = {this.handleNewGuestSubmit}
                    />
                    <MainContent
                            //for ConfirmedFilter
                        toggleFilter = {this.toggleFilter}
                        isFiltered = {this.state.isFiltered}

                            //for Counter
                        numberConfirmed = {numberConfirmed}
                        numberInvited = {numberInvited}
                        numberUnconfirmed = {numberUnconfirmed}
                            //for GuestList
                        toggleConfirmationAt = {this.toggleConfirmationAt}
                        toggleEditingAt = {this.toggleEditingAt}
                        guests = {this.state.guests}
                        setNameAt = {this.setNameAt}
                        removeGuestAt = {this.removeGuestAt}
                        pendingGuest = {this.state.pendingGuest}
                    />
                </div>
            );
        }
    }

export default App;