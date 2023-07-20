import {
  Button,
  Grid,
  TextField,
  Box,
  IconButton,
  Modal,
  Typography,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Metric } from "@tremor/react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import DeleteIcon from "@mui/icons-material/Delete";
import PublishIcon from "@mui/icons-material/Publish";
import { useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import { removeRFQ } from "../../../../../Store/Features/RFQSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  outline: "none",
};
function Quote() {
  const rfq = useSelector((state) => state.rfq.rfqProducts);
  const MySwal = withReactContent(Swal);
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [companyName, setcompanyName] = useState();
  const [telephone, settelephone] = useState();
  const [country, setcountry] = useState();
  const [comment, setcomment] = useState();
  const [file, setfile] = useState();
  console.log(rfq);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // console.log(windowWidth, "windowWidth");
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      console.log(file, "file");
      const productsList = rfq.map((e, i) => {
        return {
          qtyList: 1,
          partNumberList: e.mfrNo,
          mfrList: e.mfr,
        };
      });
      // console.log(productsList, "productsList");
      let data = {
        name,
        email,
        companyName,
        telephone,
        country,
        comment,
        products: productsList,
      };
      // console.log(data, "data is here");
      const dataFile = new FormData();
      dataFile.append("file", file);
      try {
        const res = await axios.post(
          "http://3.7.46.114:8000/api/upload",
          dataFile
        );
        console.log(res, "response to file submit");
        if (res.status === 200) {
                  MySwal.fire({
          icon: "success",
          title: "Form Submitted",
          text: "Form Submitted Successfully",
        });
        } else {

        }
      } catch (error) {
        if (error.response) {
          MySwal.fire({
            icon: "error",
            title: "Try Again",
            text: "Invalid file or format. Only Excel files are supported with valid format",
          });
        }
      }
      try {
        const res = await axios.post(
          "http://3.7.46.114:8000/api/v1/submitForm",
          data
        );
        console.log(res, "response of form");
        if (res.data.message === "Form submitted successfully") {
          // setOpen(true);
        }
      } catch (error) {
        // console.log(error);
      }
    } else {
      const productsList = rfq.map((e, i) => {
        return {
          qtyList: 1,
          partNumberList: e.mfrNo,
          mfrList: e.mfr,
        };
      });
      // console.log(productsList, "productsList");
      let data = {
        name,
        email,
        companyName,
        telephone,
        country,
        comment,
        products: productsList,
      };
      console.log(data, "data is here");
      try {
        const res = await axios.post(
          "http://3.7.46.114:8000/api/v1/submitForm",
          data
        );
        // console.log(res, "response of form");
        if (res.data.message === "Form submitted successfully") {
          setOpen(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleDelete = (e) => {
    dispatch(removeRFQ({ id: e._id }));
  };
  return (
    <>
      {windowWidth >= 1024 ? (
        <form onSubmit={handleSubmit}>
          <Grid container className="quote-container">
            <Grid
              style={{ m: "20px 0px" }}
              item
              className="quote-container-itemOne"
              xs={12}
            >
              <Metric>Request Quote</Metric>
            </Grid>
            <Grid item className="quote-container-itemTwo" xs={12}>
              <Grid container className="container">
                <Grid item xs={5} className="container-itemOne">
                  <h3>Upload a file here</h3>
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      hidden
                      accept="application/vnd.ms-excel,.xlsx, .xls"
                      onChange={(e) => setfile(e.target.files[0])}
                      type="file"
                    />
                  </Button>
                  <span>
                    Upload xls,xlsx or other Excel compatible file format. Max
                    file size :2MB
                  </span>
                </Grid>
                <Grid item xs={7} className="container-itemTwo">
                  <div className="quote-rounded-icons-div">
                    <div className="quote-rounded-icons">
                      <InsertDriveFileRoundedIcon color="primary" />
                    </div>
                    <span>Add Model to Below Form</span>
                  </div>
                  <ArrowForwardIosRoundedIcon color="primary" />
                  <div className="quote-rounded-icons-div">
                    <div className="quote-rounded-icons">
                      <PersonIcon color="primary" />
                    </div>
                    <span>Fill in Your Contact Information</span>
                  </div>
                  <ArrowForwardIosRoundedIcon color="primary" />
                  <div className="quote-rounded-icons-div">
                    <div className="quote-rounded-icons">
                      <PublishIcon color="primary" />
                    </div>
                    <span>Submit the RFQ Form</span>
                  </div>
                  <ArrowForwardIosRoundedIcon color="primary" />
                  <div className="quote-rounded-icons-div">
                    <div className="quote-rounded-icons">
                      <AlternateEmailIcon color="primary" />
                    </div>
                    <span>Contact us info@.com</span>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className="quote-container-itemThree">
              <Grid
                container
                className="quote-container-itemThree-container"
                rowGap={2}
              >
                <Grid item xs={12}>
                  <Grid container>
                    {/* <Grid item xs={1.9}>
                <span>Part Number</span>
              </Grid>
              <Grid item xs={1.9}>
                <span>Manfacturer</span>
              </Grid>
              <Grid item xs={1.9}>
                <span>Package</span>
              </Grid>
              <Grid item xs={1.9}>
                <span>Data Code</span>
              </Grid>
              <Grid item xs={1.9}>
                <span>QTY</span>
              </Grid>
              <Grid item xs={1.9}>
                <span>Target Price</span>
              </Grid> */}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  {rfq.length !== 0 ? (
                    rfq.map((e, i) => {
                      return (
                        <Grid
                          container
                          justifyContent={"flex-start"}
                          alignItems={"center"}
                          className=""
                          columnGap={1}
                          key={i}
                        >
                          {/* {console.log(e, "values")} */}
                          <Grid item xs={1.8}>
                            <TextField
                              id="ProductName"
                              defaultValue={e.title}
                              value={e.title}
                              label="Product Name"
                              variant="standard"
                            />
                          </Grid>
                          <Grid item xs={1.8}>
                            <TextField
                              defaultValue={e.mfrNo}
                              value={e.mfrNo}
                              id="ManfacturerNumber"
                              label="Manfacturer Number"
                              variant="standard"
                            />
                          </Grid>
                          <Grid item xs={1.8}>
                            <TextField
                              id="Manfacturer"
                              label="Manfacturer"
                              defaultValue={e.mfr}
                              value={e.mfr}
                              variant="standard"
                            />
                          </Grid>
                          <Grid item xs={1.8}>
                            <TextField
                              id="Package"
                              label="Package"
                              defaultValue={e.mfrNo}
                              value={e.mfrNo}
                              variant="standard"
                            />
                          </Grid>
                          {/* <Grid item xs={1.8}>
                      <TextField
                        id="DataCode"
                        label="Data Code"
                        variant="standard"
                      />
                    </Grid> */}
                          <Grid item xs={1.8}>
                            <TextField
                              id="qty"
                              label="QTY"
                              variant="standard"
                            />
                          </Grid>
                          <Grid item xs={1.8}>
                            <TextField
                              id="TargetPrice"
                              defaultValue={e.price}
                              value={e.price}
                              label="Target Price"
                              variant="standard"
                              type="number"
                            />
                          </Grid>
                          <Grid item xs={0.5}>
                            <IconButton
                              onClick={(event) => {
                                event.preventDefault();
                                handleDelete(e);
                              }}
                              aria-label="delete"
                              size="large"
                            >
                              <DeleteIcon color="error" />
                            </IconButton>
                          </Grid>
                        </Grid>
                      );
                    })
                  ) : (
                    <Grid
                      container
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      className=""
                      columnGap={1}
                    >
                      <Grid item xs={1.8}>
                        <TextField
                          id="PartNumber"
                          label="Part Number"
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={1.8}>
                        <TextField
                          id="Manfacturer"
                          label="Manfacturer"
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={1.8}>
                        <TextField
                          id="Package"
                          label="Package"
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={1.8}>
                        <TextField
                          id="DataCode"
                          label="Data Code"
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={1.8}>
                        <TextField id="qty" label="QTY" variant="standard" />
                      </Grid>
                      <Grid item xs={1.8}>
                        <TextField
                          id="TargetPrice"
                          label="Target Price"
                          variant="standard"
                          type="number"
                        />
                      </Grid>
                      {/* <Grid item xs={0.5}>
                    <IconButton aria-label="delete" size="large">
                      <DeleteIcon color="error" />
                    </IconButton>
                  </Grid> */}
                    </Grid>
                  )}
                </Grid>
                <Grid item className="item-three" xs={12}>
                  {/* <Button size="small" variant="contained">
              Add Part
            </Button> */}
                  <Button
                    className=""
                    size="small"
                    variant="contained"
                    sx={{ bgcolor: "#ff6221" }}
                  >
                    Remove All
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className="quote-container-itemFour">
              <Grid container>
                <Grid item xs={12}>
                  <h3>Contact Info</h3>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    rowGap={1}
                    columnGap={1}
                  >
                    <Grid item xs={5.9}>
                      <TextField
                        fullWidth
                        required
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        size="small"
                        id="name"
                        label="Contact Name"
                        variant="filled"
                      />
                    </Grid>
                    <Grid item xs={5.9}>
                      <TextField
                        variant="filled"
                        fullWidth
                        required
                        value={country}
                        onChange={(e) => setcountry(e.target.value)}
                        label="Choose a country"
                      />
                    </Grid>
                    <Grid item xs={5.9}>
                      <Grid container rowGap={1}>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            size="small"
                            value={companyName}
                            onChange={(e) => setcompanyName(e.target.value)}
                            id="company"
                            label="Company Name"
                            variant="filled"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            id="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            size="small"
                            label="Business Email"
                            variant="filled"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={5.9}>
                      <TextField
                        fullWidth
                        id="comment"
                        value={comment}
                        onChange={(e) => setcomment(e.target.value)}
                        size="small"
                        label="Comment"
                        multiline
                        minRows={4}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item xs={5.9}>
                      <TextField
                        fullWidth
                        size="small"
                        id="phone"
                        value={telephone}
                        onChange={(e) => settelephone(e.target.value)}
                        label="Telephone"
                        variant="filled"
                      />
                    </Grid>
                    <Grid item xs={5.9}>
                      <Button type="submit" size="small" variant="contained">
                        Submit RFQ
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Card className="quote-error-card">
                <CancelIcon
                  onClick={() => setOpen(false)}
                  className="quote-error-icon"
                />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Try again , excel file was not formatted correctly
                </Typography>
              </Card>
            </Box>
          </Modal>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <Grid container className="quote-container">
            <Grid
              style={{ m: "20px 0px" }}
              item
              className="quote-container-itemOne"
              xs={12}
            >
              <Metric>Request Quote</Metric>
            </Grid>
            <Grid item xs={12} className="quote-container-itemThree">
              <Grid
                container
                className="quote-container-itemThree-container"
                rowGap={2}
              >
                <Grid item xs={12}>
                  <Grid container>
                    {/* <Grid item xs={1.9}>
                <span>Part Number</span>
              </Grid>
              <Grid item xs={1.9}>
                <span>Manfacturer</span>
              </Grid>
              <Grid item xs={1.9}>
                <span>Package</span>
              </Grid>
              <Grid item xs={1.9}>
                <span>Data Code</span>
              </Grid>
              <Grid item xs={1.9}>
                <span>QTY</span>
              </Grid>
              <Grid item xs={1.9}>
                <span>Target Price</span>
              </Grid> */}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  {rfq.length !== 0 ? (
                    rfq.map((e, i) => {
                      return (
                        <Grid
                          container
                          justifyContent={"flex-start"}
                          alignItems={"center"}
                          className=""
                          columnGap={1}
                          key={i}
                        >
                          {/* {console.log(e, "values")} */}
                          <Grid item xs={1.8}>
                            <TextField
                              id="ProductName"
                              defaultValue={e.title}
                              value={e.title}
                              label="Product Name"
                              variant="standard"
                            />
                          </Grid>
                          <Grid item xs={1.8}>
                            <TextField
                              defaultValue={e.mfrNo}
                              value={e.mfrNo}
                              id="ManfacturerNumber"
                              label="Manfacturer Number"
                              variant="standard"
                            />
                          </Grid>
                          <Grid item xs={1.8}>
                            <TextField
                              id="Manfacturer"
                              label="Manfacturer"
                              defaultValue={e.mfr}
                              value={e.mfr}
                              variant="standard"
                            />
                          </Grid>
                          <Grid item xs={1.8}>
                            <TextField
                              id="Package"
                              label="Package"
                              defaultValue={e.mfrNo}
                              value={e.mfrNo}
                              variant="standard"
                            />
                          </Grid>
                          {/* <Grid item xs={1.8}>
                      <TextField
                        id="DataCode"
                        label="Data Code"
                        variant="standard"
                      />
                    </Grid> */}
                          <Grid item xs={1.8}>
                            <TextField
                              id="qty"
                              label="QTY"
                              variant="standard"
                            />
                          </Grid>
                          <Grid item xs={1.8}>
                            <TextField
                              id="TargetPrice"
                              defaultValue={e.price}
                              value={e.price}
                              label="Target Price"
                              variant="standard"
                              type="number"
                            />
                          </Grid>
                          <Grid item xs={0.5}>
                            <IconButton
                              onClick={(event) => {
                                event.preventDefault();
                                handleDelete(e);
                              }}
                              aria-label="delete"
                              size="large"
                            >
                              <DeleteIcon color="error" />
                            </IconButton>
                          </Grid>
                          <Grid item xs={12}>
                            <Divider></Divider>
                          </Grid>
                        </Grid>
                      );
                    })
                  ) : (
                    <Grid
                      container
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      className=""
                      columnGap={1}
                    >
                      <Grid item xs={1.8}>
                        <TextField
                          id="PartNumber"
                          label="Part Number"
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={1.8}>
                        <TextField
                          id="Manfacturer"
                          label="Manfacturer"
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={1.8}>
                        <TextField
                          id="Package"
                          label="Package"
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={1.8}>
                        <TextField
                          id="DataCode"
                          label="Data Code"
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={1.8}>
                        <TextField id="qty" label="QTY" variant="standard" />
                      </Grid>
                      <Grid item xs={1.8}>
                        <TextField
                          id="TargetPrice"
                          label="Target Price"
                          variant="standard"
                          type="number"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Divider></Divider>
                      </Grid>
                      {/* <Grid item xs={0.5}>
                    <IconButton aria-label="delete" size="large">
                      <DeleteIcon color="error" />
                    </IconButton>
                  </Grid> */}
                    </Grid>
                  )}
                </Grid>
                <Grid item className="item-three" xs={12}>
                  {/* <Button size="small" variant="contained">
              Add Part
            </Button> */}
                  <Button
                    className=""
                    size="small"
                    variant="contained"
                    sx={{ bgcolor: "#ff6221" }}
                  >
                    Remove All
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className="quote-container-itemFour">
              <Grid container>
                <Grid item xs={12}>
                  <h3>Contact Info</h3>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    rowGap={1}
                    columnGap={1}
                  >
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        required
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        size="small"
                        id="name"
                        label="Contact Name"
                        variant="filled"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="filled"
                        fullWidth
                        required
                        value={country}
                        onChange={(e) => setcountry(e.target.value)}
                        label="Choose a country"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container rowGap={1}>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            size="small"
                            value={companyName}
                            onChange={(e) => setcompanyName(e.target.value)}
                            id="company"
                            label="Company Name"
                            variant="filled"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            id="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            size="small"
                            label="Business Email"
                            variant="filled"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="comment"
                        value={comment}
                        onChange={(e) => setcomment(e.target.value)}
                        size="small"
                        label="Comment"
                        multiline
                        minRows={4}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        size="small"
                        id="phone"
                        value={telephone}
                        onChange={(e) => settelephone(e.target.value)}
                        label="Telephone"
                        variant="filled"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" size="small" variant="contained">
                        Submit RFQ
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Card className="quote-error-card">
                <CancelIcon
                  onClick={() => setOpen(false)}
                  className="quote-error-icon"
                />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Try again , excel file was not formatted correctly
                </Typography>
              </Card>
            </Box>
          </Modal>
        </form>
      )}
    </>
  );
}

export default Quote;
