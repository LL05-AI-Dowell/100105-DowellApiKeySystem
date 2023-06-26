import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import Logo from "../dowellLogo.png";
import { GetRedeemVoucher, RedeemVoucher } from "../util/api";
import { useUserContext } from "../contexts/UserContext";
import { dowellLoginUrl } from "../utils";

import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [anchor, setAnchor] = useState(null);
  const [voucher, setVoucher] = useState(null);
  const [redeemed, setRedeemed] = useState(null)
  const [snackBar, setSnackBar] = useState(false);
  const { currentUser } = useUserContext();
  const { setAppLoading, currentLocalSession, setCurrentLocalSession, setCurrentUser } = useUserContext();

  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile");
  };

  const logOut = () => {
    // setCurrentUser(null)
    // setCurrentLocalSession(null)
    // setAppLoading(true)
    // sessionStorage.setItem("session_id", '');
    // window.location.replace(dowellLoginUrl);
  };

  const handleClose = () => {
    setAnchor(null);
  };
  const handleMenu = (e) => {
    setAnchor(e.currentTarget);
  };
  const handleClickOpen = async () => {
    const res = await GetRedeemVoucher(currentUser?.userinfo?.email);
    console.log("the axios data is voucher is", res);
    if (res?.data?.length > 0) {
      setVoucher(res.data[0]);
    }
    setOpen(true);
    setAnchor(null);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };
  const handleRedeemVoucher = async () => {
    const axiosData = await RedeemVoucher({
      name: currentUser?.userinfo?.username,
      email: currentUser?.userinfo?.email,
    });

    if (axiosData?.data.length > 0) {
      setVoucher(axiosData.data[0]);
    }
    setRedeemed(axiosData)
    setSnackBar(true);
    console.log("the axios respos is", axiosData);
  };
  return (
    <Box sx={{ zIndex: "5" }}>
      <AppBar position="static" sx={{ bgcolor: "#00573412" }}>
        <Toolbar color="#00573412">
          <Link to='/'>
            <img src={Logo} width="70" style={{ marginRight: "30px" }} alt="" />
          </Link>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ flexGrow: 1, color: "#005734" }}
          >
            Dowell API Services
          </Typography>
          <Box>
            <IconButton size="large" onClick={handleMenu}>
              <AccountCircle fontSize="large" sx={{ color: "#005734" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorE1={anchor}
              keepMounted
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchor)}
              onClose={handleClose}
            >
              <MenuItem onClick={goToProfile}>Profile</MenuItem>
              <MenuItem onClick={handleClickOpen}>Redeem Voucher</MenuItem>
              <MenuItem onClick={logOut}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Dialog open={open} onClose={handleCloseDialog} sx={{ p: 4 }}>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            bgcolor: "#dce8e4",
            width: "500px",
          }}
        >
          <Typography variant="h4" mr={2} fontWeight="bold">
            Download <br /> Redeem Code
          </Typography>
          <img src={Logo} width="80" alt="" />
        </DialogContent>
        <DialogActions sx={{ bgcolor: "#dce8e4", display: "block", p: 2 }}>
          <Box
            p={2}
            sx={{
              bgcolor: "white",
              mb: 2,
              color: "#005734",
              borderColor: "#005734",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {voucher == null ? "No Voucher" : voucher.voucher_code}
          </Box>
          <Typography>
            If you haven't redeemed,{" "}
            <Link
              color="#005734"
              onClick={handleRedeemVoucher}
              component={Button}
            >
              Click here to redeem
            </Link>
          </Typography>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{horizontal:'right', vertical:'top'}}
        open={snackBar}
        autoHideDuration={5000}
        onClose={() => setSnackBar(false)}
      >
        {redeemed == null ? (
          <Alert severity="error">You already have redeemed voucher!</Alert>
        ) : (
          <Alert severity="success" sx={{ width: "100%" }}>
            You created voucher!
          </Alert>
        )}
      </Snackbar>
    </Box>
  );
};

export default Header;
