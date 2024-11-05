import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../products.json';
import { CropReportChart2 } from '../components/CropReportChart';

const Crop = () => {
    const [crop, setCrop] = useState(null); // Initialize as null to check loading state
    const { id } = useParams();

    useEffect(() => {
        const selectedCrop = products.find(product => product.uid == id); // Use find instead of filter
        if (selectedCrop) {
            setCrop(selectedCrop); // Set the crop state to the found product
        }
    }, [id]); // Add id to dependency array

    // Check if crop is still loading
    if (!crop) {
        return <div>Loading...</div>; // Loading state
    }

    return (
        <div>
            <CropReportChart2 formData={crop} />
            <div>
                <h1>{crop.cropName}</h1>
                <p>Variety: {crop.cropVariety}</p>
                <p>Planting Date: {crop.plantingDate}</p>
                <p>Expected Harvest Date: {crop.expectedHarvestDate}</p>
                <p>Location: {crop.location}</p>
                <p>Growth Stage: {crop.growthStage}</p>
                <p>Days Since Planting: {crop.daysSincePlanting}</p>
                <p>Irrigation Details: {crop.irrigationDetails}</p>
                <p>Pest Incidents: {crop.pestIncidents}</p>
                <p>Treatment Applied: {crop.treatmentApplied}</p>
                <p>Estimated Yield: {crop.estimatedYield}</p>
                <p>Actual Yield: {crop.actualYield}</p>
                <p>Additional Notes: {crop.additionalNotes}</p>
            </div>
        </div>
    );
};

export default Crop;
