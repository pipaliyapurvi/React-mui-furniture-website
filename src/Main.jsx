import Box from '@mui/material/Box'
import React from 'react'
import Typography from '@mui/material/Typography'
import Slider from "react-slick";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function main() {



  return (
    <>
      <Box className="main">
        <Typography variant="h6">EXPLORE OUR</Typography>
        <Typography variant="h3">Luxurious Haven Collection</Typography>
        <Box className="opestion">
          <Box className="ops-1">
            <Typography variant="h5" >Home Decoration</Typography>
            <span>12</span>
          </Box>
          <Box className="ops-2">
            <Typography variant="h5">Office Decoration</Typography>
            <span>40</span>
          </Box>
          <Box className="ops-3">
            <Typography variant="h5">Indoor Decoration</Typography>
            <span>60</span>
          </Box>
          <Box className="ops-4">
            <Typography variant="h5">Outdoor Decoration</Typography>
            <span>10</span>
          </Box>
        </Box>


      </Box>

    </>
  )
}

export default main
