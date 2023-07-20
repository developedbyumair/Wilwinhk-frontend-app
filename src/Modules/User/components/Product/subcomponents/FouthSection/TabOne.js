import React from "react";
import { Title, Subtitle } from "@tremor/react";
import { Grid } from "@mui/material";
function TabOne({ product }) {
  return (
    <div>
      <Grid container gap={2}>
        <Grid className="single-product" item xs={3.8}>
          <Title>Manfacturer:</Title>
          <Subtitle>{product.mfr}</Subtitle>
        </Grid>
        <Grid className="single-product" item xs={3.8}>
          <Title>Manfacturer Number:</Title>
          <Subtitle>{product.mfrNo}</Subtitle>
        </Grid>
        <Grid className="single-product" item xs={3.8}>
          <Title>Part Number:</Title>
          <Subtitle>{product.partNumber}</Subtitle>
        </Grid>
        <Grid className="single-product" item xs={3.8}>
          <Title>Price:</Title>
          <Subtitle>{product.price}</Subtitle>
        </Grid>
        <Grid className="single-product" item xs={3.8}>
          <Title>In Stock:</Title>
          <Subtitle>{product.stock ? product.stock : "-"}</Subtitle>
        </Grid>
        {/* <Grid className="single-product" item xs={3.8}>
          <Title>Category:</Title>
          <Subtitle>{product.category[0].name}</Subtitle>
        </Grid>
        <Grid className="single-product" item xs={3.8}>
          <Title>Sub Category:</Title>
          <Subtitle>{console.log(product.subCategory)}</Subtitle>
        </Grid> */}
        <Grid className="single-product" item xs={3.8}>
          <Title>Description:</Title>
          <Subtitle>{product.description ? product.description : "-"}</Subtitle>
        </Grid>
        <Grid className="single-product" item xs={3.8}>
          <Title>Factory Lead:</Title>
          <Subtitle>{product.factoryLead ? product.factoryLead : "-"}</Subtitle>
        </Grid>
        <Grid className="single-product" item xs={3.8}>
          <Title>Life Cycle:</Title>
          <Subtitle>{product.lifeCycle ? product.lifeCycle : "-"}</Subtitle>
        </Grid>
        <Grid className="single-product" item xs={3.8}>
          <Title>Material:</Title>
          <Subtitle>{product.material ? product.material : "-"}</Subtitle>
        </Grid>
        <Grid className="single-product" item xs={3.8}>
          <Title>Contact Plating:</Title>
          <Subtitle>
            {product.contactPlating ? product.contactPlating : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Mount:</Title>
          <Subtitle>{product.mount ? product.mount : "-"}</Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Pins No:</Title>
          <Subtitle>{product.pinsNo ? product.pinsNo : "-"}</Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Housing Material:</Title>
          <Subtitle>
            {product.housingMaterial ? product.housingMaterial : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Shape:</Title>
          <Subtitle>{product.shape ? product.shape : "-"}</Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Packaging:</Title>
          <Subtitle>{product.packaging ? product.packaging : "-"}</Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Published:</Title>
          <Subtitle>{product.published ? product.published : "-"}</Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Series:</Title>
          <Subtitle>{product.series ? product.series : "-"}</Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>CPU:</Title>
          <Subtitle>{product.CPU ? product.CPU : "-"}</Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>PbfreeCode:</Title>
          <Subtitle>{product.PbfreeCode ? product.PbfreeCode : "-"}</Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Part Status:</Title>
          <Subtitle>{product.partStatus ? product.partStatus : "-"}</Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Moisture Sentsitivity Level:</Title>
          <Subtitle>
            {product.moistureSentsitivityLevel
              ? product.moistureSentsitivityLevel
              : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Number Of Terminals:</Title>
          <Subtitle>
            {product.numberOfTerminals ? product.numberOfTerminals : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Number Of Terminations:</Title>
          <Subtitle>
            {product.numberOfTerminations ? product.numberOfTerminations : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>ECCN Code:</Title>
          <Subtitle>{product.eccnCode ? product.eccnCode : "-"}</Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Connector Type:</Title>
          <Subtitle>
            {product.connectorType ? product.connectorType : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Number Of Positions:</Title>
          <Subtitle>
            {product.numberOfPositions ? product.numberOfPositions : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Max Operating Temperature:</Title>
          <Subtitle>
            {product.maxOperatingTemperature
              ? product.maxOperatingTemperature
              : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Min Operating Temperature:</Title>
          <Subtitle>
            {product.minOperatingTemperature
              ? product.minOperatingTemperature
              : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Gender:</Title>
          <Subtitle>{product.Gender ? product.Gender : "-"}</Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Voltage Rate:</Title>
          <Subtitle>{product.voltageRate ? product.voltageRate : "-"}</Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Additional Feature:</Title>
          <Subtitle>
            {product.additionalFeature ? product.additionalFeature : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Contact Finishing Mating:</Title>
          <Subtitle>
            {product.contactFinishingMating
              ? product.contactFinishingMating
              : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Mil Conformation:</Title>
          <Subtitle>
            {product.milConformation ? product.milConformation : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Din Conformation:</Title>
          <Subtitle>
            {product.dinConformation ? product.dinConformation : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>IECC Conformance:</Title>
          <Subtitle>
            {product.IECConformance ? product.IECConformance : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Filter Feature:</Title>
          <Subtitle>
            {product.FilterFeature ? product.FilterFeature : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Mixed Contacts:</Title>
          <Subtitle>
            {product.MixedContacts ? product.MixedContacts : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Contact Gender:</Title>
          <Subtitle>
            {product.ContactGender ? product.ContactGender : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Empty Shell:</Title>
          <Subtitle>{product.EmptyShell ? product.EmptyShell : "-"}</Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Operating Supply Voltage:</Title>
          <Subtitle>
            {product.OperatingSupplyVoltage
              ? product.OperatingSupplyVoltage
              : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Back Shell Type:</Title>
          <Subtitle>
            {product.BackshellType ? product.BackshellType : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Body Or Shell Style:</Title>
          <Subtitle>
            {product.BodyOrShellStyle ? product.BodyOrShellStyle : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>ELV:</Title>
          <Subtitle>{product.ELV ? product.ELV : "-"}</Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Max Supply Voltage:</Title>
          <Subtitle>
            {product.MaxSupplyVoltage ? product.MaxSupplyVoltage : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Min Supply Voltage:</Title>
          <Subtitle>
            {product.MinSupplyVoltage ? product.MinSupplyVoltage : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Coupling Type:</Title>
          <Subtitle>
            {product.CouplingType ? product.CouplingType : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Number Of Ports:</Title>
          <Subtitle>
            {product.NumberOfPorts ? product.NumberOfPorts : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Outside Diameter:</Title>
          <Subtitle>
            {product.OutsideDiameter ? product.OutsideDiameter : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Head Diameter:</Title>
          <Subtitle>
            {product.HeadDiameter ? product.HeadDiameter : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Diameter:</Title>
          <Subtitle>{product.Diameter ? product.Diameter : "-"}</Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Contact Plating:</Title>
          <Subtitle>
            {product.DiameterInside ? product.DiameterInside : "-"}
          </Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Height:</Title>
          <Subtitle>{product.height ? product.height : "-"}</Subtitle>
        </Grid>

        <Grid className="single-product" item xs={3.8}>
          <Title>Length:</Title>
          <Subtitle>{product.length ? product.length : "-"}</Subtitle>
        </Grid>
        <Grid className="single-product" item xs={3.8}>
          <Title>Width:</Title>
          <Subtitle>{product.width ? product.width : "-"}</Subtitle>
        </Grid>
        <Grid className="single-product" item xs={3.8}>
          <Title>Thickness:</Title>
          <Subtitle>{product.thickness ? product.thickness : "-"}</Subtitle>
        </Grid>
        <Grid className="single-product" item xs={3.8}>
          <Title>Radiation Hardening:</Title>
          <Subtitle>
            {product.RadiationHardening ? product.RadiationHardening : "-"}
          </Subtitle>
        </Grid>
        <Grid className="single-product" item xs={3.8}>
          <Title>REACHSVHC:</Title>
          <Subtitle>{product.REACHSVHC ? product.REACHSVHC : "-"}</Subtitle>
        </Grid>
        <Grid className="single-product" item xs={3.8}>
          <Title>Flammability:</Title>
          <Subtitle>
            {product.Flammability ? product.Flammability : "-"}
          </Subtitle>
        </Grid>
        <Grid className="single-product" item xs={3.8}>
          <Title>Lead Fire:</Title>
          <Subtitle>{product.leadFire ? product.leadFire : "-"}</Subtitle>
        </Grid>
        <Grid className="single-product" item xs={3.8}>
          <Title>Color:</Title>
          <Subtitle>{product.color ? product.color : "-"}</Subtitle>
        </Grid>
        <Grid className="single-product" item xs={3.8}>
          <Title>Total Number Of Contacts:</Title>
          <Subtitle>
            {product.totalNumberOfContacts
              ? product.totalNumberOfContacts
              : "-"}
          </Subtitle>
        </Grid>
        <Grid className="single-product" item xs={3.8}>
          <Title>Accessory Type:</Title>
          <Subtitle>
            {product.AccessoryType ? product.AccessoryType : "-"}
          </Subtitle>
        </Grid>
      </Grid>
    </div>
  );
}

export default TabOne;
