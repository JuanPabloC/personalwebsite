import React from "react"
import styled from "@emotion/styled"

const UnderConstructionComp = styled("div")`
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
  color: #6b0504;
`;

const UnderConstruction = ({ menuLinks }) => (
    <UnderConstructionComp>
      <h1>Under Construction</h1>
      <p>Coming Soon</p>
    </UnderConstructionComp>
)
  
export default UnderConstruction
  
