import "./DuoCamps.css";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export default function DuoCamps() {
  return (
    <div id="duoCamps">
      <div>
        <div className="head-text">
          <Card>
            <div>
              <CardContent>
                <div style={{ position: "relative" }}>
                  <CardMedia component="img" image="src\assets\mountains.jpg" />
                  <div
                    style={{
                      position: "absolute",
                      color: "white",
                      top: 8,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <h1>Mountain</h1>
                    <Button variant="contained">Learn More</Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
      <div>
        <div className="head-text">
          <Card style={{ width: "85%" }}>
            <div>
              <CardContent>
                <div style={{ position: "relative" }}>
                  <CardMedia component="img" image="src\assets\lake.jpg" />
                  <div
                    style={{
                      position: "absolute",
                      color: "white",
                      top: 8,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <h1>Lake</h1>
                    <Button variant="contained">Learn More</Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
