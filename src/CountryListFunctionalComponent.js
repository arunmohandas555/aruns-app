import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CountryListFunctionalComponent() {
    const [countryList, setCountryList] = useState(['in', 'US', 'RUS']);
    return (
        <div>
            <div> hi from class component CountryList </div>
            <div> country list</div>
            {countryList.map(c => (
                <div> {c} </div>
            ))}
        </div>
    );
}
