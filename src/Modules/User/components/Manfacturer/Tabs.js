import React, { useState } from 'react'
import { Card  } from "@tremor/react";
import Tabs from "@mui/material/Tabs";
import { alphabetA, alphabetB, alphabetC, alphabetD, alphabetE, alphabetF, alphabetG, alphabetH, alphabetI,alphabetJ, alphabetK, alphabetL, alphabetM, alphabetN, alphabetO, alphabetP, alphabetQ, alphabetR, alphabetS, alphabetU, tabsHeadings } from '../../../../Utility/Manfacturer/Manfacturer';
import { Grid, Tab } from '@mui/material';
import {useNavigate} from "react-router-dom"
import { PopularPartsData, PopularPartsDataThree, PopularPartsDataTwo } from '../../../../Utility/Home/tabData';
function TabsComp() {
const [value, setValue] = useState("one");

const handleChange = (event, newValue) => {
  setValue(newValue);
};
  return (
    <Card>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Card>
  );
}

export default TabsComp;
  {/* <TabList> */}
  {/* </TabList> */}
    {/* <Tabs
      defaultValue="0"
      value={value}
      onValueChange={setValue}
      variant="scrollable"
    >
      {tabsHeadings.map((e, i) => (
        <Tab value={e} text={e} />
      ))}
    </Tabs>
  {value === 0 && (
    <Grid  container gap={1}> */}
      {/* {alphabetA.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))} */}
    {/* </Grid>
  )} */}
  {/* {value === 1 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetB.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 2 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetC.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 3 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetD.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 4 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetE.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 5 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetF.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 6 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetG.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 7 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetH.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 8 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetI.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 9 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetJ.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 10 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetK.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 11 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetL.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 12 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetM.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )} */}
  {/* {value === 13 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetN.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 14 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetO.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 15 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetP.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 16 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetQ.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 17 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetR.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 18 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetS.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 19 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetS.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 20 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetU.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 21 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetS.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 22 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetS.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 23 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetS.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 24 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetS.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )}
  {value === 25 && (
    <Grid sx={{ m: "10px 0px 0px 0px" }} container gap={1}>
      {alphabetS.map((e, i) => (
        <Grid key={i} item xs={2.9}>
          <Subtitle onClick={() => navigate(`/manfacturerDetails/${e}`)}>
            {e}
          </Subtitle>
        </Grid>
      ))}
    </Grid>
  )} */}