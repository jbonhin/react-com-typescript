import React, { useState } from 'react';

import {
    Container,
    ToggleLabel,
    ToggleSelector
} from './styles';

const Toggle: React.FC = () => {
    
    const [online, setOnline] = useState(false);
    return (
        <Container>
            <ToggleLabel>Ligth</ToggleLabel>
                <ToggleSelector
                    checked={online}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    onChange={() => setOnline(!online)}
                />
            <ToggleLabel>dark</ToggleLabel>
        </Container>
    );
}

export default Toggle;