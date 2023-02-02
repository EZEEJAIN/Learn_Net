import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Sidebaar from "../../src/assests/1.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import { useSelector } from "react-redux";
// import { selectHeader } from "../slices/HeaderSlice";
import { Link } from "react-router-dom";


const Sidebar = () => {
    const [state, setState] = React.useState(false);
    const listElement=[{title:"Notification",link:"/"}, {title:"Help & FAQ",link:"/aboutus"}]
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === "left" ? 150 : 250, backgroundColor:"#ffffff" ,height:"100vh", color:"#000000", display:"flex",alignItems:"start",justifyContent:"center"  }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {listElement.map(
              (elem, index) => (
                <ListItem key={index} disablePadding>
                  <Link to={elem.link}>
                  <ListItemButton>
                    <ListItemText primary={elem.title} />
                  </ListItemButton></Link>
                </ListItem>
              )
            )}
          </List>
        </Box>
      );
  return (
    <div className={`w-10 z-10 mx-0 my-10 fixed -top-5  block md:hidden left-7`}>
    {["left"].map((anchor) => (
      <React.Fragment key={anchor}>
        {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
        <div className="lg:hidden block  " onClick={toggleDrawer(anchor, true)}>
        <img src={Sidebaar} alt="side" className="w-5 h-5" />
        </div>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    ))}
  </div>
    )
}

export default Sidebar