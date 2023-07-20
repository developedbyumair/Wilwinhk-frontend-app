import React, { useEffect } from "react";
import { Button, Card, Subtitle, TextInput, Title } from "@tremor/react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { AddtoCart, RemovefromCart } from "../../Store/Features/cartSlice";
import { addRFQ, removeRFQ } from "../../Store/Features/RFQSlice";
import { AddtoCartAPI } from "../../Store/API/AddtoCart";
import { RemovefromCartAPI } from "../../Store/API/RemovefromCart";
import { Navigate, useNavigate } from "react-router-dom";
function Tables({ columns, tableData }) {
  console.log(tableData, "tableData");
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const rfq = useSelector((state) => state.rfq);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleAddtoCart = async (e) => {
    if (user.currentUser) {
      let datatoUpdate = {
        id: e._id,
        images: e.images[0].url,
        title: e.title,
        mfrno: e.mfrNo,
        desc: e.description,
        realPrice: e.price,
        price: e.price,
        quantity: 1,
      };
      // console.log(datatoUpdate, "datatoUpdate");
      dispatch(
        AddtoCart({
          products: e,
          productsID: e._id,
          item: datatoUpdate,
        })
      );
      let apiData = {
        productID: e._id,
        name: e.title,
        price: e.price,
        quantity: 1,
      };
      try {
        const res = await AddtoCartAPI(user.userToken, apiData);
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/login");
    }
  };
  const handleDeletefromCart = async (e) => {
    dispatch(RemovefromCart({ productsID: e._id }));
    try {
      const res = await RemovefromCartAPI(e._id, user.userToken);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddtoRFQ = (e) => {
    if (user.currentUser) {
      dispatch(addRFQ(e));
    } else {
      navigate("/login");
    }
  };
  const handleDeletefromRFQ = (e) => {
    dispatch(removeRFQ({ id: e._id }));
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // useEffect(() => {
  //   const headings = () => {
  //     let data = columns.map((e, i) => {
  //       return { id: i, label: e, minWidth: 170 };
  //     });
  //     // console.log(data, "headingData");
  //   };
  //   headings();
  // }, []);

  return (
    <Card sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align={"start"} style={{ minWidth: 250 }}>
                <Title>Product</Title>
              </TableCell>
              {columns.map((column) => (
                <TableCell align={"center"} style={{ minWidth: 250 }}>
                  <Title>{column}</Title>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((row) => {
                console.log(row, "row");
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell align={"start"}>
                      <Product data={row} />
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.inventory ? row.inventory : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.price ? row.price : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      {row.price ? (
                        <>
                          {cart.productsID.includes(row._id) ? (
                            <Button
                              color="red"
                              onClick={(e) => {
                                e.preventDefault();
                                handleDeletefromCart(row);
                              }}
                            >
                              Remove from Cart
                            </Button>
                          ) : (
                            <Button
                              onClick={(e) => {
                                e.preventDefault();
                                handleAddtoCart(row);
                              }}
                            >
                              Add to Cart
                            </Button>
                          )}
                        </>
                      ) : (
                        <>
                          {rfq.rfqProductsID.includes(row._id) ? (
                            <Button
                              color="red"
                              onClick={(e) => {
                                e.preventDefault();
                                handleDeletefromRFQ(row);
                              }}
                            >
                              Remove From RFQ
                            </Button>
                          ) : (
                            <Button
                              onClick={(e) => {
                                e.preventDefault();
                                handleAddtoRFQ(row);
                              }}
                            >
                              Add to RFQ
                            </Button>
                          )}
                        </>
                      )}
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.dataSheet ? row.dataSheet : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.factoryLead ? row.factoryLead : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.lifeCycle ? row.lifeCycle : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.material ? row.material : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.contactPlating ? row.contactPlating : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.mount ? row.mount : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.packege ? row.package : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.pinsNo ? row.pinsNo : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.material ? row.material : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.housingMaterial ? row.housingMaterial : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.shape ? row.shape : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.packaging ? row.packaging : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.published ? row.published : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.series ? row.series : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.CPC ? row.CPC : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.PbfreeCode ? row.PbfreeCode : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.partStatus ? row.partStatus : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.MoistureSensitivityLevel
                          ? row.MoistureSensitivityLevel
                          : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.numberOfTerminations
                          ? row.numberOfTerminations
                          : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.termination ? row.termination : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.eccnCode ? row.eccnCode : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.connectorType ? row.connectorType : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.numberOfPositions ? row.numberOfPositions : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.maxOperatingTemperature
                          ? row.maxOperatingTemperature
                          : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.minOperatingTemperature
                          ? row.minOperatingTemperature
                          : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.color ? row.color : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.Gender ? row.Gender : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.voltageRate ? row.voltageRate : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.additionalFeature ? row.additionalFeature : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.contactFinishingMating
                          ? row.contactFinishingMating
                          : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.milConformation ? row.milConformation : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.dinConformance ? row.dinConformance : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.IECConformance ? row.IECConformance : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.FilterFeature ? row.FilterFeature : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.MixedContacts ? row.MixedContacts : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.Option ? row.Option : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.totalNumberOfContacts
                          ? row.totalNumberOfContacts
                          : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.Orientation ? row.Orientation : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.Depth ? "row.Depth" : "Depth"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.ReachComplianceCode
                          ? row.ReachComplianceCode
                          : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.CurrentRating ? row.CurrentRating : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.frequencyBand ? row.frequencyBand : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.ApprovalAgency ? row.ApprovalAgency : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.LeadPitch ? row.LeadPitch : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.NumberOfContacts ? row.NumberOfContacts : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.MatingInformation ? row.MatingInformation : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.ContactGender ? row.ContactGender : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.EmptyShell ? row.EmptyShell : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.OperatingSupplyVoltage
                          ? row.OperatingSupplyVoltage
                          : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.BackshellType ? row.BackshellType : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.BodyOrShellStyle ? row.BodyOrShellStyle : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.Interface ? row.Interface : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.ELV ? row.ELV : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.MaxSupplyVoltage ? row.MaxSupplyVoltage : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.MinSupplyVoltage ? row.MinSupplyVoltage : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.CouplingType ? row.CouplingType : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.NumberOfPorts ? row.NumberOfPorts : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.AccessoryType ? row.AccessoryType : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.NumberOfPoles ? row.NumberOfPoles : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.Sealable ? row.Sealable : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.Density ? row.Density : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.NumberOfDrivers ? row.NumberOfDrivers : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.OutsideDiameter ? row.OutsideDiameter : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.NumberOfReceivers ? row.NumberOfReceivers : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.HeadDiameter ? row.HeadDiameter : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.Diameter ? row.Diameter : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.height ? row.height : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.length ? row.length : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.width ? row.width : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.thickness ? row.thickness : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.DiameterInside ? row.DiameterInside : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.RadiationHardening ? row.RadiationHardening : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.REACHSVHC ? row.REACHSVHC : "-"}</Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>
                        {row.Flammability ? row.Flammability : "-"}
                      </Subtitle>
                    </TableCell>
                    <TableCell align={"center"}>
                      <Subtitle>{row.LeadFree ? row.LeadFree : "-"}</Subtitle>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={tableData?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  );
}

export default Tables;
