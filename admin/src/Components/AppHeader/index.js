import { BellFilled, MailOutlined } from "@ant-design/icons";
//  import { Avatar } from "antd";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../API";
import { useNavigate } from 'react-router-dom';

function AppHeader() {
  const navigate = useNavigate();


  return (
    <div className="AppHeader">
      <Image
        width={40}
        // src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"
      ></Image>
      <Typography.Title> Dashboard</Typography.Title>
    
      <h3 className="logout" onClick={() => navigate("/")}>logout</h3>               

      
    </div>
  );
}
export default AppHeader;
