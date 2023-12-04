import {Divider} from '@mui/material'

const CustomCard = ({title, children}) => {

  return (
    <section>
      <h2 style={{fontSize: 28, color: '#7c8587'}}>{title.toUpperCase()}</h2>
      <Divider sx={{height: '5px', backgroundColor: '#7c8587', width: 50}}/>
      {children}
    </section>
  )
}

export default CustomCard;