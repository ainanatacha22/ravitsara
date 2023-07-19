import React from 'react'

const WrapperComponents = (Component, idName) =>
    function HOC() {
        return (
            <div>
                <div id={idName}></div>
                <Component />
            </div>
        )
    }


export default WrapperComponents
