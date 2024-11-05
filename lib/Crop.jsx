import { useState } from "react";

export const cropFormData = () =>{
    const [formData, setFormData] = useState({
        cropName: '',
        cropVariety: '',
        plantingDate: '',
        expectedHarvestDate: '',
        location: '',
        growthStage: '',
        daysSincePlanting: '',
        irrigationDetails: '',
        pestIncidents: '',
        treatmentLog: {
            treatmentType: '',
            productName: '',
            applicationMethod: '',
            quantityUsed: '',
        },
        treatmentApplied: '',
        applicationDates: '',
        daysSincePlanting: '',
        estimatedYield: '',
        actualYield: '',
        additionalNotes: '',
    });

    return {
        formData,
        setFormData
    }
}