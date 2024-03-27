import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import OrderDetail from "../../../../component/orderDetail/OrderDetail";
import "./OrderRight.css"
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "#ffffff" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          sx={{
           
          }}
          className="tabs"
        >
          <Tab
            sx={{
              textTransform: "none",
            }}
            label="Shipments"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              textTransform: "none",
            }}
            label="Stops"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              textTransform: "none",
            }}
            label="Rates"
            {...a11yProps(2)}
          />
          <Tab
            sx={{
              textTransform: "none",
            }}
            label="Details"
            {...a11yProps(3)}
          />
          <Tab
            sx={{
              textTransform: "none",
            }}
            label="Documents"
            {...a11yProps(4)}
          />
          <Tab
            sx={{
              textTransform: "none",
            }}
            label="Items"
            {...a11yProps(5)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>Shipments</CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Stops
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       Rates
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
       <OrderDetail/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Doccuments
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
       Items 
      </CustomTabPanel>
    </Box>
  );
}
