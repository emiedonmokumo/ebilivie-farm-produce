import React, { useState } from 'react';
import { cropFormData } from '../../lib/Crop';

// Navigation Buttons Component
function NavigationButtons({ prevStep, nextStep, submitForm, isLastStep }) {
    return (
        <div className="mt-4">
            {prevStep && (
                <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 mr-5"
                >
                    Back
                </button>
            )}
            {isLastStep ? (
                <button
                    type="button"
                    onClick={submitForm}
                    className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                    Save
                </button>
            ) : (
                <button
                    type="button"
                    onClick={nextStep}
                    className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                    Next
                </button>
            )}
        </div>
    );
}

// Step Components
function Step1({ formData, setFormData }) {
    return (
        <div>
            <h2 className='mb-3 font-bold text-lg'>Crop Identification</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Crop Name:</label>
                <input
                    type="text"
                    placeholder="e.g., Maize"
                    value={formData.cropName}
                    onChange={(e) => setFormData({ ...formData, cropName: e.target.value })}
                    className="border rounded w-full py-2 px-3 text-gray-700"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Crop Variety:</label>
                <input
                    type="text"
                    placeholder="e.g., Sweet Corn"
                    value={formData.cropVariety}
                    onChange={(e) => setFormData({ ...formData, cropVariety: e.target.value })}
                    className="border rounded w-full py-2 px-3 text-gray-700"
                />
            </div>
        </div>
    );
}

function Step2({ formData, setFormData }) {
    return (
        <div>
            <h2 className='mb-3 font-bold text-lg'>Planting Information</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Planting Date:</label>
                <input
                    type="date"
                    value={formData.plantingDate}
                    onChange={(e) => setFormData({ ...formData, plantingDate: e.target.value })}
                    className="border rounded w-full py-2 px-3 text-gray-700"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Expected Harvest Date:</label>
                <input
                    type="date"
                    value={formData.expectedHarvestDate}
                    onChange={(e) => setFormData({ ...formData, expectedHarvestDate: e.target.value })}
                    className="border rounded w-full py-2 px-3 text-gray-700"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Location:</label>
                <input
                    placeholder='Field or area where the crop is planted'
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="border rounded w-full py-2 px-3 text-gray-700"
                />
            </div>
        </div>
    );
}

function Step3({ formData, setFormData }) {
    return (
        <div>
            <h2 className='mb-3 font-bold text-lg'>Growth Tracking</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Current Growth Stage:</label>
                <input
                    type="text"
                    placeholder="e.g., Vegetative"
                    value={formData.growthStage}
                    onChange={(e) => setFormData({ ...formData, growthStage: e.target.value })}
                    className="border rounded w-full py-2 px-3 text-gray-700"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Days Since Planting:</label>
                <input
                    type="number"
                    value={formData.daysSincePlanting}
                    onChange={(e) => setFormData({ ...formData, daysSincePlanting: e.target.value })}
                    className="border rounded w-full py-2 px-3 text-gray-700"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Irrigation Details:</label>
                <textarea
                    placeholder="Irrigation schedule or water usage..."
                    value={formData.irrigationDetails}
                    onChange={(e) => setFormData({ ...formData, irrigationDetails: e.target.value })}
                    className="border rounded w-full py-2 px-3 text-gray-700"
                />
            </div>
        </div>
    );
}

function Step4({ formData, setFormData }) {
    return (
        <div>
            <h2 className='mb-3 font-bold text-lg'>Health and Treatment Records</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Pest/Disease Incidents:</label>
                <textarea
                    placeholder="Details of any incidents..."
                    value={formData.pestIncidents}
                    onChange={(e) => setFormData({ ...formData, pestIncidents: e.target.value })}
                    className="border rounded w-full py-2 px-3 text-gray-700"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Treatments Applied:</label>
                <textarea
                    placeholder="Details of treatments applied..."
                    value={formData.treatmentsApplied}
                    onChange={(e) => setFormData({ ...formData, treatmentsApplied: e.target.value })}
                    className="border rounded w-full py-2 px-3 text-gray-700"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Application Dates:</label>
                <input
                    type="date"
                    value={formData.applicationDates}
                    onChange={(e) => setFormData({ ...formData, applicationDates: e.target.value })}
                    className="border rounded w-full py-2 px-3 text-gray-700"
                />
            </div>
        </div>
    );
}

function Step5({ formData, setFormData }) {
    return (
        <div>
            <h2 className='mb-3 font-bold text-lg'>Yield Tracking</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Estimated Yield (kg):</label>
                <input
                    type="number"
                    value={formData.estimatedYield}
                    onChange={(e) => setFormData({ ...formData, estimatedYield: e.target.value })}
                    className="border rounded w-full py-2 px-3 text-gray-700"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Actual Yield (kg):</label>
                <input
                    type="number"
                    value={formData.actualYield}
                    onChange={(e) => setFormData({ ...formData, actualYield: e.target.value })}
                    className="border rounded w-full py-2 px-3 text-gray-700"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Additional Notes:</label>
                <textarea
                    placeholder="Any additional information..."
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    className="border rounded w-full py-2 px-3 text-gray-700"
                />
            </div>
        </div>
    );
}

function Step6({ formData, setFormData }) {
    return (
        <div>
            <h2 className='mb-3 font-bold text-lg'>Treatment Logs</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Treatment Type:</label>
                <select value={formData.treatmentLog.treatmentType}
                    onChange={(e) => setFormData({ ...formData, treatmentLog: {...formData.treatmentLog, treatmentType: e.currentTarget.value} })}
                    name="treatmentType"
                    className="border rounded w-full py-2 px-3 text-gray-700"
                >
                    <option value="Fertilizer">Fertilizer</option>
                    <option value="Pesticide">Pesticide</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Product Name:</label>
                <input
                    type="text"
                    name="productName"
                    required
                    value={formData.treatmentLog.productName}
                    onChange={(e) => setFormData({ ...formData, treatmentLog: {...formData.treatmentLog, productName: e.target.value} })}
                    placeholder="Enter product name"
                    className="border rounded w-full py-2 px-3 text-gray-700"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Application Method:</label>
                <input
                    type="text"
                    name="applicationMethod"
                    required
                    value={formData.treatmentLog.applicationMethod}
                    onChange={(e) => setFormData({ ...formData, treatmentLog: {...formData.treatmentLog, applicationMethod: e.target.value} })}
                    placeholder="Enter application method"
                    className="border rounded w-full py-2 px-3 text-gray-700"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Quantity Used:</label>
                <input
                    type="text"
                    name="quantityUsed"
                    value={formData.treatmentLog.quantityUsed}
                    onChange={(e) => setFormData({ ...formData, treatmentLog: {...formData.treatmentLog, quantityUsed: e.target.value} })}
                    required
                    placeholder="Enter quantity used"
                    className="border rounded w-full py-2 px-3 text-gray-700"
                />
            </div>
        </div>
    );
}

// MultiStepForm Component
function CropAddForm() {
    const { formData, setFormData } = cropFormData()
    const [currentStep, setCurrentStep] = useState(1);
    

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 6));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
    const isLastStep = currentStep === 6;

    const submitForm = () => {
        console.log(formData);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1: return <Step1 formData={formData} setFormData={setFormData} />;
            case 2: return <Step2 formData={formData} setFormData={setFormData} />;
            case 3: return <Step3 formData={formData} setFormData={setFormData} />;
            case 4: return <Step4 formData={formData} setFormData={setFormData} />;
            case 5: return <Step5 formData={formData} setFormData={setFormData} />;
            case 6: return <Step6 formData={formData} setFormData={setFormData} />;
            default: return null;
        }
    };

    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-2xl mb-6 font-bold">Multi-Step Crop Form</h1>
            <div className="w-full max-w-lg">
                {renderStep()}
                <NavigationButtons
                    prevStep={currentStep > 1 ? prevStep : null}
                    nextStep={nextStep}
                    submitForm={submitForm}
                    isLastStep={isLastStep}
                />
            </div>
        </div>
    );
}


export default CropAddForm;