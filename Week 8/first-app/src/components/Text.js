import Button from "./Button";
import "./Text.css";

function Text(){
    return(
        <div className="Text">
            <h2>Heading</h2>
            <p>Here is the "p" tag with some writing.</p>
            <div>
            <Button></Button>
            <Button></Button>
            </div>
        </div>
    );
}

export default Text;