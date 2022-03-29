import React, {Component} from 'react';
import { Spring } from 'react-spring';
import styled, {keyframes} from 'styled-components';
import '../App';


const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}

export default function Component1() {
    return (
        <Spring
            from={{opacity: 0, marginTop: 500}}
            to={{opacity:1, marginTop: 0}}
            config={{delay: 1000, duration: 2000}}
        >
            {props => (
                <div style={props}>
                    <div style={c1Style}>
                        <h1>Component 1</h1>
                        <p>Lorem ipsum dolor sit bla bla bla</p>
                    </div>
                </div>
            )}
        </Spring>
    )
}