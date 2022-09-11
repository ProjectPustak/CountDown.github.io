const domContainer = document.querySelector("#root");

const  Increment = ()=>{
    
    const [counter,setCounter] = React.useState(0);

    return (
        <div class="container">
            <div id="box">
                <h1 id="display">{counter}</h1>
                <div id="btn">
                    <button id="button" onClick ={()=>{setCounter(counter+1)}}>Increment +</button>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(
    <div class="container">
        <Increment />
    </div>,
    domContainer
)