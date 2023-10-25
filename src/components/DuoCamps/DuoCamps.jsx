import "./DuoCamps.css";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function DuoCamps() {
  return (
    <div id="duoCamps">
      <Card className="head-text">
        <div>
          <CardContent>
            <div style={{ position: "relative" }}>
              <CardMedia component="img" image="src\assets\mountains1.jpg" />
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  top: "33%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                className="textButton"
              >
                <h1>Mountain</h1>
                <Button variant="contained">Learn More</Button>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>

      <Card className="head-text">
        <div>
          <CardContent>
            <div style={{ position: "relative" }}>
              <CardMedia component="img" image="src\assets\lake1.jpg" />
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  top: "33%",
                  left: "50%",

                  transform: "translateX(-50%)",
                }}
                className="textButton"
              >
                <h1 id="lakeTitle">Lake</h1>
                <Button variant="contained">Learn More</Button>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
