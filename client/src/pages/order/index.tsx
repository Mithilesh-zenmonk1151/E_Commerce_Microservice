import React from "react";
import SidebarLayout from "../../layoutUser/sidebarLayout/SidebarLayout";
import { Box, Stack } from "@mui/material";
import HeaderLayout from "../../layoutUser/headerLayout/HeaderLayout";
import TypographyCompo from "../../component/typography/TypographyCompo";
import Buttons from "../../component/button/Button";
import OrderUpper from "./orderUpper/OrderUpper";
import OrderBodyLeft from "./orderBody/orderBodyLeft/OrderBodyLeft";
import OrderBodyRight from "./orderBody/OrderBodyRight/OrderBodyRight";

function Orders() {
  return (
    <Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          bgcolor: "#efeff9",
          height: "105vh",
        }}
      >
        <SidebarLayout />
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            <HeaderLayout />
          </Box>
          <Box
            sx={{
              bgcolor: "#C0C0C0",
              height: "1px",
              width: "100%",
            }}
          ></Box>
          {/* <Box> */}
          {/* </Box> */}
          {/* </Box> */}

          <Box
            sx={{
              padding: "30px",
            }}
          >
            <OrderUpper />
          </Box>
          <Box
            sx={{
              display: "grid",
              gap: "20px",
              gridTemplateColumns:"0.8fr 0.4fr",
              padding:"20px"
            }}
          >
            <Box
              sx={{
              }}
            >
              <OrderBodyRight />
            </Box>
            <Box
              sx={{
              }}
            >
              <OrderBodyLeft />
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default Orders;
