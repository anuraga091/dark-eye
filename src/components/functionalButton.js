import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';

//import Update from './dataUpdateFunctional';

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }
    
    function ScanningButtonLeft() {
        const [isScanning, setScanning] = useState(false);
    
        useEffect(() => {
        if (isScanning) {
            simulateNetworkRequest().then(() => {
            setScanning(false);
            });
        }
        }, [isScanning]);
    
        const handleClick = () => setScanning(true);
    
        return (
            <Button
                variant="primary"
                disabled={isScanning}
                onClick={!isScanning ? handleClick : null}>
                {isScanning ? 'Scanning…' : 'Scan Now'}
            </Button>
        );
    }
    function ScanningButtonRight() {
        const [isScanning, setScanning] = useState(false);
    
        useEffect(() => {
        if (isScanning) {
            simulateNetworkRequest().then(() => {
            setScanning(false);
            });
        }
        }, [isScanning]);
    
        const handleClick = () => setScanning(true);
    
        return (
            <Button
                variant="primary"
                disabled={isScanning}
                onClick={!isScanning ? handleClick : null}>
                {isScanning ? 'Select Date' : 'Schedule Scan'}
            </Button>
        );
    }

  
 






export {ScanningButtonLeft , ScanningButtonRight};
