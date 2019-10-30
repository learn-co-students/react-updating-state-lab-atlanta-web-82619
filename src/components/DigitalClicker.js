import React from 'react'
// import { throws } from 'assert';
// Code DigitalClicker Component Here
export default class DigitalClicker extends React.Component {
    constructor() {
        super();

        this.state = {
            timesClicked: 0,
        }}
        handleClick = () => {
        this.setState(previouState => ({
            timesClicked: previouState.timesClicked + 1 }))
        }


        render () {
            return (
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            ) }} 
        