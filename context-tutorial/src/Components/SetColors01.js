import React from 'react';
import ColorContext, { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

class SetColors01 extends React.Component {

    static contextType = ColorContext;
    // 위처럼 하면 this.context가 value를 가리킴

    handleSetColor = color => {
        this.context.actions.SetColor(color);
    }

    handleSetSubcolor = subcolor => {
        this.context.actions.SetSubcolor(subcolor);
    }

    render(){
        return (
            <div>
                <h2>Seloct Color</h2>
                <div style={{display : 'flex'}}>
                    {colors.map(
                        color => (
                            <div 
                                key={color}
                                style = {{
                                    background : color,
                                    width : '24px',
                                    height : '24px',
                                    cursor : 'pointer'
                                }}
                                onClick = {()=> this.handleSetColor(color)}
                                onContextMenu = {e=>{
                                    e.preventDefault() // 우클릭 시 메뉴가 뜨는 것을 무시함
                                    this.handleSetSubcolor(color)
                                }}
                            />
                        )
                    )}
                </div>
                <hr></hr>
            </div>
        );
    }
    
};


export default SetColors01;