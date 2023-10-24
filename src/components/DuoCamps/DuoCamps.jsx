import { Container } from "@mui/material";
import "./DuoCamps.css";
import Box from "@mui/material/Box";

export default function DuoCamps() {
  return (
    <div id="duoCamps">
      <Box
        component="img"
        sx={{
          height: 500,
          width: 750,
          maxHeight: { xs: 233, md: 450 },
          maxWidth: { xs: 350, md: 650 },
        }}
        alt="The house from the offer."
        src="src\assets\mountains.jpg"
        className="landscapes"
      />
      <Box
        component="img"
        sx={{
          height: 500,
          width: 750,
          maxHeight: { xs: 233, md: 450 },
          maxWidth: { xs: 350, md: 650 },
        }}
        alt="Lake Views"
        src="src\assets\lake.jpg"
        className="landscapes"
      />
    </div>
  );
}
