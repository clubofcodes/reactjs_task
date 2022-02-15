import React, { Component } from 'react';
import './CssDemo.css';
import styles from './CssDemo.module.css';

const internal_style = {
    fontSize: '20px',
    color: 'blue',
    margin: '5px'
}

class CssDemo extends Component {
    render() {
        let colorVar = 'green';
        let marginVar = 5;
        let propColorVar = this.props.warning ? 'text-warning' : '';
        return (
            <div>
                <br />
                <hr />
                <h1 className={styles.change_heading}>Module Style</h1>
                <p style={internal_style}>Internal Style</p>
                <p style={{margin:'5px'}}>Inline Style</p>
                <p style={{color: colorVar, margin: marginVar}}>Variable Style</p>
                <p className={`${propColorVar} text-xl-center`} style={{margin:'5px'}}>Props Style</p>
            </div>
        )
    }
}

export default CssDemo;