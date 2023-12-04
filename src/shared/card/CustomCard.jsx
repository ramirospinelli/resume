import {Card, CardContent, Typography} from '@mui/material'

const CustomCard = ({title, children}) => {

  return (
      <Card style={{margin: 10}}>
        <CardContent>
          <Typography variant='h5'>
          {title.toUpperCase()}
          </Typography>
          {children}
        </CardContent>
      </Card>
  )
}

export default CustomCard;