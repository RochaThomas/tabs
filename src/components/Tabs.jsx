import React from "react";

const headersStyle = {
    display: "flex",
    justifyContent: "center"
}

const tabHeaderStyle = {
    padding: "0px 10px",
    border: "black solid thin",
    margin: "2px"
}

const currentTabHeaderStyle = {
    padding: "0px 10px",
    border: "black solid thin",
    margin: "2px",
    color: "white",
    backgroundColor: "black"
}

const Tabs = (props) => {

    const tabHandler = (e, i) => {
        console.log(e);
        props.setCurrentTab(i);
    }

    return (
        <div className="headAndContent">
            <div className="headers" style={headersStyle}>
                {
                    props.tabs.map((tab, i) => {
                        return (
                            i === props.currentTab ?
                            <div className="currentTabHeader" key={i} style={currentTabHeaderStyle} onClick={ (e) => tabHandler(e, i) }>
                                <h2>{tab.label}</h2>
                            </div> :
                            <div className="tabHeader" key={i} style={tabHeaderStyle} onClick={ (e) => tabHandler(e, i) }>
                                <h2>{tab.label}</h2>
                            </div>
                        )
                    })
                }
            </div>
            <div className="tabContent">
                <p>{props.tabs[props.currentTab].content}</p>
            </div>
        </div>
    );
}
export default Tabs;