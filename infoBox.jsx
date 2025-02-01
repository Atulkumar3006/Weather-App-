import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox(info){
    const INIT_URL="https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    
    const HOT_URL="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwZGF5fGVufDB8fDB8fHww";
    const COLD_URL="https://images.unsplash.com/photo-1599059021750-82716ae2b661?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMGRheXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL: COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         <p>Temperature={info.temp}&deg;.c</p>
         <p>humidity={info.humidity}</p>
         <p>Min Temp={info.tempMin}&deg;.c</p>
         <p>Max Temp={info.tempMax}&deg;.c</p>
         <p>The weather can be describe as <i>{info.weather}</i> and feels Like={info.feelslike}&deg;.c</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    )
}