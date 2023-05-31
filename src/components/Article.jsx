import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Article = ({ article }) => {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
					{article.author}
				</Typography>
				<Typography variant='body2'>{article.title}</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Learn More</Button>
			</CardActions>
		</Card>
	);
};

export default Article;
