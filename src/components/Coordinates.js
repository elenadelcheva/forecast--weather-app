import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    margin: 25px 0;
`;

const H5 = styled.h5`
    font-size: 14px;
    margin: 0 0 10px;
`;


const Coordinates = ({cityInfo}) => (
    <StyledWrapper>
        <H5> Longitude </H5>
        <p>
           {cityInfo.lon}
        </p>
        <H5> Latitude </H5>
        <p>
            {cityInfo.lat}
        </p>
        <H5> Time zone </H5>
        <p>
            {cityInfo.timezone}
        </p>
    </StyledWrapper>
);

export default Coordinates;