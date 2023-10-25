import { Container } from "@mui/material";
import "./DuoCamps.css";
import Box from "@mui/material/Box";

import CardMedia from "@mui/material/CardMedia";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function DuoCamps() {
  return (
    <div id="duoCamps">
      <div>
        <div className="head-text">
          <Card className="cardContainer">
            <div>
              <CardContent id="mountainCardContent">
                <div style={{ position: "relative" }}>
                  <CardMedia component="img" image="src\assets\mountains.jpg" />
                  <div
                    style={{
                      position: "absolute",
                      color: "white",
                      top: "50%",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    Your text
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
        <div className="text-Image">
          <h1>Mountains</h1>
        </div>
      </div>
      <div>
        <div className="head-text">
          <Card className="cardContainer">
            <div>
              <CardContent>
                <div style={{ position: "relative" }}>
                  <CardMedia component="img" image="src\assets\lake.jpg" />
                  <div
                    style={{
                      position: "absolute",
                      color: "white",
                      top: "50%",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    Your text
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
