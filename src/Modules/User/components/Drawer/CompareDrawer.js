import { Card, Button, Grid, Typography } from "@mui/material";
import { Subtitle, Title } from "@tremor/react";
import React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCompare, RemovefromCompare } from "../../../../Store/Features/compareSlice";

function CompareDrawer() {
  const dispatch = useDispatch();
  const compare = useSelector((state) => state.compare.compare);
  // console.log(compare, "compare");
  const handleDeleteCompare = (e) => {
    e.preventDefault();
    dispatch(DeleteCompare());
  };
  const handleDeletesingle = (e) => {
    // console.log(e,"sklectede");
    dispatch(RemovefromCompare({ productsID :e._id}));
  };
  return (
    <div className="compare-container">
      <Grid
        container
        justifyContent={"center"}
        rowGap={1}
        alignItems={"center"}
      >
        <Grid className="itemOne" item xs={12}>
          <Grid container>
            <Grid item xs={8.5}>
              <Typography variant="h5" style={{ marginLeft: "10px" }}>
                Compare Items
              </Typography>
            </Grid>
            <Grid item alignSelf={"flex-end"} xs={3.5}>
              <Button
                size="small"
                onClick={handleDeleteCompare}
                variant={"contained"}
                color="error"
              >
                Delete All
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {compare.length !== 0 ? (
          compare.map((e, i) => {
            return (
              <Grid item xs={11} key={i}>
                <Card className="card-compare">
                  <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={1}
                  >
                    <Grid className="compare-item-img-icon" item xs={4}>
                      <img
                        className="image-compare"
                        src="https://static.utmel.com/80fimg/nkkswitches-nd3fr10p-7154.jpg"
                        alt="loading..."
                      />
                      <div className="icons-compare-delete">
                        <HighlightOffIcon
                          onClick={(event) => {
                            event.preventDefault();
                            handleDeletesingle(e);
                          }}
                          color=""
                        />
                      </div>
                    </Grid>
                    <Grid key={i} item xs={7}>
                      <Subtitle>{e.title}</Subtitle>
                      <Subtitle>{e.mfr}</Subtitle>
                      <Subtitle>{e.mfrNo}</Subtitle>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            );
          })
        ) : (
          <Grid item xs={11}>
            <Card sx={{ p: "10px" }}>
              <Title>No Items</Title>
            </Card>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default CompareDrawer;
