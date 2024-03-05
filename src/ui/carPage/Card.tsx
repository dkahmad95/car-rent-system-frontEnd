import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface MediaCardProps {
  carId:number;
  name: string;
  model: string;
  licence_plate_number: string;
  isRented: number;
  image: string
}

const MediaCard: React.FC<MediaCardProps> = ({
  name,
  model,
  licence_plate_number,
  isRented,
  image,
  carId
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300, width: 300 }}
        component="img"
        src={image}
        alt="Car Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Model: {model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Plate: {licence_plate_number}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {isRented > 0  ? "Rented" : "Not Rented"}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/carDetails/${carId}`}>
          <Button size="small">Car Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
