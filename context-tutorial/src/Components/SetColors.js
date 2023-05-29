import React from 'react';
import { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const SetColors = () => {
    return (
        <div>
            <h2>Seloct Color</h2>
            <ColorConsumer>
                {
                    (({actions}) => (
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
                                        onClick = {()=> actions.setColor(color)}
                                        onContextMenu = {e=>{
                                            e.preventDefault() // 우클릭 시 메뉴가 뜨는 것을 무시함
                                            actions.setSubcolor(color)
                                        }}
                                    />
                                )
                            )}
                        </div>
                    ))
                }
            </ColorConsumer>
            <hr></hr>
        </div>
    );
};


export default SetColors;